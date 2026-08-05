import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const maxDuration = 300;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const secret = formData.get('secret');
    if (secret !== 'dinagui-migrate-2026') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const collection = formData.get('collection') as 'media' | 'videos';
    const id = formData.get('id') as string;
    const file = formData.get('file') as File;
    const mimetype = formData.get('mimetype') as string;

    if (!collection || !id || !file) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const payload = await getPayload({ config });
    
    // Update Payload document
    const updated = await payload.update({
      collection,
      id,
      data: {},
      file: {
        data: buffer,
        name: file.name,
        size: buffer.length,
        mimetype: mimetype || file.type || 'application/octet-stream',
      },
      overwriteExistingFiles: true,
    });

    return NextResponse.json({ success: true, id: updated.id, url: updated.url });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
