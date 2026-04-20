import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const fileParam = searchParams.get("file");

  if (!fileParam) {
    return NextResponse.json({ error: "Missing file parameter" }, { status: 400 });
  }

  // Decode the file path
  const filePath = decodeURIComponent(fileParam);

  // Security: ensure the file is within the project
  const projectRoot = path.join(process.cwd());
  const fullPath = path.join(projectRoot, filePath);

  // Prevent directory traversal
  if (!fullPath.startsWith(projectRoot)) {
    return NextResponse.json({ error: "Invalid file path" }, { status: 403 });
  }

  if (!fs.existsSync(fullPath)) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const content = fs.readFileSync(fullPath);
  const filename = path.basename(fullPath);

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
