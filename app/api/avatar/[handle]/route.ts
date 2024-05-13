import {
  baseURL,
  handleSearchPlatform,
  shouldPlatformFetch,
} from "@/utils/base";
import { NextRequest, NextResponse } from "next/server";
import { resolveUniversalRespondFromRelation } from "../../profile/[handle]/utils";
import { respondWithSVG } from "../svg/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const name = searchParams.get("handle") || "";
  const platform = handleSearchPlatform(name);
  let avatarURL = "";
  if (shouldPlatformFetch(platform)) {
    const profiles = (await resolveUniversalRespondFromRelation({
      platform,
      handle: name,
      req,
      ns: true,
    })) as any;

    if (profiles?.length > 0) {
      const rawAvatarUrl = profiles?.find((x: any) => !!x.avatar)?.avatar;
      avatarURL = rawAvatarUrl;
      if (rawAvatarUrl?.includes(".webp")) {
        avatarURL = `${baseURL}/avatar/process?url=${encodeURIComponent(
          rawAvatarUrl
        )}`;
      }
      try {
        const response = await fetch(avatarURL, {
          redirect: "manual",
        });
        if (response) {
          return new Response(response.body, {
            headers: {
              "Content-Type":
                response.headers.get("content-type") || "image/png",
              "Cache-Control":
                "public, s-maxage=604800, stale-while-revalidate=86400",
            },
          });
        }
      } catch (e) {
        return NextResponse.redirect(avatarURL);
      }
    }
  }

  return respondWithSVG(name, 240);
}

export const runtime = "edge";
