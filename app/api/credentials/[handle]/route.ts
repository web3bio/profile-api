import { errorHandle, getUserHeaders } from "@/utils/base";
import { ErrorMessages } from "@/utils/types";
import { NextRequest } from "next/server";
import { resolveUniversalParams } from "@/utils/utils";
import { PlatformType } from "@/utils/platform";
import { resolveCredentialsHandle } from "./utils";

export async function GET(req: NextRequest) {
  const handle = req.nextUrl.searchParams.get("handle") || "";
  const headers = getUserHeaders(req);
  const id = resolveUniversalParams([handle])[0];
  if (!id) {
    return errorHandle({
      identity: handle,
      code: 404,
      platform: "credentials",
      message: ErrorMessages.invalidIdentity,
    });
  }
  const platform = id.split(",")[0] as PlatformType;
  const identity = id.split(",")[1];

  return resolveCredentialsHandle(identity, platform, headers);
}

export const runtime = "edge";
