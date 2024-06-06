import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// e.g `https://api.web3.bio/revalidate?path=/[domain]`
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { message: "Missing path param" },
      { status: 400 }
    );
  }
  revalidatePath(path);
  return NextResponse.json({ path: path, revalidated: true, now: Date.now() });
}

export const runtime = "edge";
export const preferredRegion = ["hnd1", "sfo1"];
export const dynamic = "force-dynamic";
