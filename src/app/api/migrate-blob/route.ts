import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const maxDuration = 300; // 5 minutes max duration for Vercel

export async function GET(request: Request) {
  // Only run in production or if explicitly forced
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  if (secret !== 'dinagui-migrate-2026') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const payload = await getPayload({ config });
  const results = { media: [] as string[], videos: [] as string[], errors: [] as string[] };

  try {
    // 1. Migrate Media
    const mediaRes = await payload.find({
      collection: 'media',
      limit: 1000,
      depth: 0,
    });

    for (const item of mediaRes.docs) {
      if (item.url && item.url.includes('/api/media/file/') && item.filename) {
        try {
          const fileUrl = `https://www.dinagui.com/media/${item.filename}`;
          const response = await fetch(fileUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`);
          }
          
          const arrayBuffer = await response.arrayBuffer();
          const fileBuffer = Buffer.from(arrayBuffer);
          
          await payload.update({
            collection: 'media',
            id: item.id,
            data: {},
            file: {
              data: fileBuffer,
              name: item.filename,
              size: fileBuffer.length,
              mimetype: item.mimeType || 'image/jpeg',
            },
            overwriteExistingFiles: true,
          });
          results.media.push(item.filename);
        } catch (err: any) {
          results.errors.push(`Media ${item.filename}: ${err.message}`);
        }
      }
    }

    // 2. Migrate Videos
    const videoRes = await payload.find({
      collection: 'videos',
      limit: 1000,
      depth: 0,
    });

    for (const item of videoRes.docs) {
      if (item.url && item.url.includes('/api/videos/file/') && item.filename) {
        try {
          const fileUrl = `https://www.dinagui.com/videos/${item.filename}`;
          const response = await fetch(fileUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch ${fileUrl}: ${response.statusText}`);
          }
          
          const arrayBuffer = await response.arrayBuffer();
          const fileBuffer = Buffer.from(arrayBuffer);
          
          await payload.update({
            collection: 'videos',
            id: item.id,
            data: {},
            file: {
              data: fileBuffer,
              name: item.filename,
              size: fileBuffer.length,
              mimetype: item.mimeType || 'video/mp4',
            },
            overwriteExistingFiles: true,
          });
          results.videos.push(item.filename);
        } catch (err: any) {
          results.errors.push(`Video ${item.filename}: ${err.message}`);
        }
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
