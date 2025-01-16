import { NextResponse } from 'next/server';
import { db } from '@/app/lib/firebase';
import { TrackingData } from '@/app/lib/data-mapping';
export async function POST(req: Request) {
    try {
        const data : TrackingData = await req.json();
        console.log(data);
        // Store the webhook data in Firebase
        const trackingRef = db.ref('tracking');
        await trackingRef.push({ timestamp: Date.now(), data });
        console.log('Webhook data stored successfully');
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Webhook error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
