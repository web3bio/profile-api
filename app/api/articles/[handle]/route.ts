import { baseURL, handleSearchPlatform, respondWithCache } from "@/utils/base";
import { PlatformType } from "@/utils/platform";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const MirrorBaseURL = "https://mirror.xyz";
const ParagraphBaseURL = "https://paragraph.xyz";

const subStr = (str: string) => {
  return str.length > 100 ? str.substring(0, 80) + "..." : str;
};

enum ArticlePlatform {
  contenthash = "contenthash",
  paragraph = "paragraph",
  mirror = "mirror",
}

const emptyReturn = () =>
  NextResponse.json({
    items: [],
  });

const fetchRss = async (handle: string, limit: number) => {
  return await fetch(
    `https://contenthash.web3.bio/api/rss?query=${handle}&mode=list&limit=${limit}`
  ).then((res) => res.json());
};

const fetchArticle = async (
  address: string,
  limit: number,
  platform: ArticlePlatform
) => {
  return await fetch("https://api.firefly.land/article/v1/article", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      addresses: [address],
      limit,
      platform:
        platform === ArticlePlatform.mirror
          ? 1
          : platform === ArticlePlatform.paragraph
          ? 2
          : 0,
    }),
  }).then((res) => res.json());
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const handle = searchParams.get("handle") || "";
  const limit = parseInt(searchParams.get("limit") || "") || 10;
  const platform = searchParams.get("platform") || "";
  const system = handleSearchPlatform(handle);
  let result = {} as any;
  let rssArticles = {} as any;
  const profile = await fetch(
    baseURL + `/api/profile/${system}/${handle}`
  ).then((res) => res.json());
  if (!profile) return emptyReturn();
  if (
    [PlatformType.ethereum, PlatformType.ens, PlatformType.dotbit].includes(
      system
    )
  ) {
    rssArticles = await fetchRss(profile.identity, limit);
    result = {
      title: rssArticles.title,
      link: rssArticles.link,
      description: rssArticles.description,
      image: rssArticles.image || null,
      items: [
        ...rssArticles.items?.map((x: any) => ({
          ...x,
          type: ArticlePlatform.contenthash,
        })),
      ],
    };
  }

  const fireflyArticles = await fetchArticle(
    profile.address,
    limit,
    platform as ArticlePlatform
  );
  fireflyArticles?.data.map((x: any) => {
    const content = JSON.parse(x.content_body);
    if (x.platform === 1) {
      // mirror
      result.items.push({
        title: content.content.title,
        link: `${MirrorBaseURL}/${profile.identity}/${x.original_id}`,
        author: "",
        thumbnail: "",
        description: subStr(content.content.body),
        published: x.content_timestamp * 1000,
        body: content.content.body,
        type: ArticlePlatform.mirror,
      });
    } else {
      // paragraph
      result.items.push({
        title: content.title,
        link: content.url
          ? `https://${content.url}`
          : `${ParagraphBaseURL}/@${profile.identity}/${content.slug}`,
        author: "",
        thumbnail: "",
        description: subStr(content.markdown),
        published: x.content_timestamp * 1000,
        body: content.markdown,
        type: ArticlePlatform.paragraph,
      });
    }
  });
  result.items = [
    ...result.items
      .sort((a: any, b: any) => {
        return a.published - b.published;
      })
      .slice(0, limit),
  ];
  return respondWithCache(JSON.stringify(result));
}
