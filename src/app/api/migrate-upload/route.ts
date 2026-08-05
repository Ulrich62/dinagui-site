import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@/payload.config';

export const maxDuration = 300;

export async function POST(request: Request) {
  try {
    const { secret, collection, id, url, sizes } = await request.json();
    
    if (secret !== 'dinagui-migrate-2026') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    if (!collection || !id) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const payload = await getPayload({ config });
    
    const dataToUpdate: any = {};
    if (url) dataToUpdate.url = url;
    if (sizes) dataToUpdate.sizes = sizes;

    const updated = await payload.update({
      collection,
      id,
      data: dataToUpdate
    });

    return NextResponse.json({ success: true, updated });
  } catch (error: any) {
    console.error('Migration error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
