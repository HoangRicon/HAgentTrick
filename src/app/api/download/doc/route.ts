import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileParam = searchParams.get("file");

  if (!fileParam) {
    return NextResponse.json({ error: "Missing file parameter" }, { status: 400 });
  }

  const filePath = decodeURIComponent(fileParam);

  // Strip "docs/" prefix if present (URLs use "docs/..." but files are at public/docs/...)
  const relativeFile = filePath.startsWith("docs/")
    ? filePath.slice(5)
    : filePath;

  // Serve from public/docs/ directory (works on both localhost and Vercel)
  const projectRoot = path.join(process.cwd(), "public");
  const fullPath = path.join(projectRoot, "docs", relativeFile);

  if (!fullPath.startsWith(projectRoot)) {
    return NextResponse.json({ error: "Invalid file path" }, { status: 403 });
  }

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const content = fs.readFileSync(fullPath);
  const filename = path.basename(fullPath);

  const asciiFilename = encodeURIComponent(filename);

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${asciiFilename}"; filename*=UTF-8''${asciiFilename}`,
    },
  });
}
