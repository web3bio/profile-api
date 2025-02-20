import { PlatformType } from "@/utils/platform";
import { NextRequest } from "next/server";
import { resolveByPlatform } from "@/utils/utils";

export async function GET(req: NextRequest) {
  return resolveByPlatform(req, PlatformType.unstoppableDomains, false);
}

export const runtime = "edge";
