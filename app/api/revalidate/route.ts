import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const secret =
    request.headers.get("x-revalidation-secret") ||
    request.nextUrl.searchParams.get("secret");

  const expectedSecret = process.env.REVALIDATION_SECRET;

  if (!expectedSecret || secret !== expectedSecret) {
    return NextResponse.json(
      { success: false, message: "Invalid or missing revalidation secret" },
      { status: 401 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const path = body.path || request.nextUrl.searchParams.get("path");
  const tag = body.tag || request.nextUrl.searchParams.get("tag");

  if (tag) {
    revalidateTag(tag, { expire: 0 });
  }

  if (path) {
    revalidatePath(path);
  } else {
    // Default: revalidate projects and homepage
    revalidatePath("/projects");
    revalidatePath("/");
    revalidateTag("projects", { expire: 0 });
  }

  return NextResponse.json({
    success: true,
    revalidated: true,
    path: path || "all",
    tag: tag || "all",
    timestamp: Date.now(),
  });
}
