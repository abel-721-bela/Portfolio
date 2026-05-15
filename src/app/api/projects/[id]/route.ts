import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const projectPath = path.join(process.cwd(), 'public', 'assets', 'projects', id);

  try {
    if (!fs.existsSync(projectPath)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(projectPath);
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      // Exclude title.jpg/png as it's used for the hero
      return (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp' || ext === '.gif') && 
             !file.startsWith('title.');
    });

    // Return the relative paths from public
    const imagePaths = images.map(img => `/assets/projects/${id}/${img}`);

    return NextResponse.json({ images: imagePaths });
  } catch (error) {
    console.error(`Error reading directory for project ${id}:`, error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}
