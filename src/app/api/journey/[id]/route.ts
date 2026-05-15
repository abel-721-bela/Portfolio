import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const journeyPath = path.join(process.cwd(), 'public', 'assets', 'journey', id);

  try {
    if (!fs.existsSync(journeyPath)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(journeyPath);
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp' || ext === '.gif');
    });

    // Return the relative paths from public
    const imagePaths = images.map(img => `/assets/journey/${id}/${img}`);

    return NextResponse.json({ images: imagePaths });
  } catch (error) {
    console.error(`Error reading directory for journey ${id}:`, error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
