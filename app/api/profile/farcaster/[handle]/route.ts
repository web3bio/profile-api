import {
  errorHandle,
  respondWithCache,
} from "@/utils/base";
import { PlatformType } from "@/utils/platform";
import { regexFarcaster } from "@/utils/regexp";
import { ErrorMessages } from "@/utils/types";
import { NextRequest } from "next/server";
import { resolveFarcasterHandle } from "./utils";

const resolveFarcasterRespond = async (handle: string) => {
  try {
    const json = await resolveFarcasterHandle(handle);
    return respondWithCache(JSON.stringify(json));
  } catch (e: any) {
    return errorHandle({
      identity: handle,
      platform: PlatformType.farcaster,
      code: e.cause || 500,
      message: e.message,
    });
  }
};

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const inputName = searchParams.get("handle");
  const lowercaseName = inputName?.toLowerCase() || "";

  const regexFid = /fid:(\d*)/i;

  if (
    !regexFarcaster.test(lowercaseName) &&
    !regexFid.test(lowercaseName)
  )
    return errorHandle({
      identity: lowercaseName,
      platform: PlatformType.farcaster,
      code: 404,
      message: ErrorMessages.invalidIdentity,
    });
  const queryInput = lowercaseName.endsWith(".farcaster")
    ? lowercaseName.replace(".farcaster", "")
    : lowercaseName;

  return resolveFarcasterRespond(queryInput);
}

export const runtime = "edge";
