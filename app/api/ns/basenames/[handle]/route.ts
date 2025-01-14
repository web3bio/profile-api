import {
  errorHandle,
  getUserHeaders,
  isValidEthereumAddress,
  uglify,
} from "@/utils/base";
import { PlatformType } from "@/utils/platform";
import { regexBasenames, regexEth } from "@/utils/regexp";
import { ErrorMessages } from "@/utils/types";
import { NextRequest } from "next/server";
import { resolveENSRespondNS } from "../../ens/[handle]/utils";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const headers = getUserHeaders(req);
  const inputName = searchParams.get("handle") || "";
  const lowercaseName = isValidEthereumAddress(inputName)
    ? inputName
    : uglify(inputName?.toLowerCase(), PlatformType.basenames);
  if (!regexBasenames.test(lowercaseName) && !regexEth.test(lowercaseName))
    return errorHandle({
      identity: lowercaseName,
      platform: PlatformType.basenames,
      code: 404,
      message: ErrorMessages.invalidIdentity,
    });
  return resolveENSRespondNS(lowercaseName, headers, PlatformType.basenames);
}

export const runtime = "edge";
