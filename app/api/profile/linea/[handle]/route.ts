import { PlatformType } from "@/utils/platform";
import { resolveByPlatform } from "@/utils/utils";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return resolveByPlatform(req, PlatformType.linea, false);
}

export const runtime = "edge";
