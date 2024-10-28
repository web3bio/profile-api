import { errorHandle, respondWithCache } from "@/utils/base";
import { PlatformType } from "@/utils/platform";
import { regexUID } from "@/utils/regexp";
import { ErrorMessages } from "@/utils/types";
import { NextRequest } from "next/server";
import { resolveLensHandle } from "../../[handle]/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const uid = searchParams.get("uid")?.toLowerCase() || "";

  if (!regexUID.test(uid))
    return errorHandle({
      identity: uid,
      platform: PlatformType.lens,
      code: 404,
      message: ErrorMessages.invalidIdentity,
    });

  try {
    const json = await resolveLensHandle(`#${uid}`);
    return respondWithCache(JSON.stringify(json));
  } catch (e: any) {
    return errorHandle({
      identity: uid,
      platform: PlatformType.lens,
      code: e.cause || 500,
      message: e.message,
    });
  }
}

export const runtime = "edge";