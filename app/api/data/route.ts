import { NextResponse } from 'next/server';
import { db } from '@/app/lib/firebase';
import { TrackingData } from '@/app/lib/data-mapping';

export async function GET() {
    try {
        const trackingRef = db.ref('tracking');
        // Query the last 10 items, ordered by timestamp
        const snapshot = await trackingRef
            .orderByChild('timestamp')
            .limitToLast(10)
            .once('value');

        const items: TrackingData[] = [];
        snapshot.forEach((childSnapshot) => {
            items.push(childSnapshot.val());
        });

        items.reverse();

        return NextResponse.json({ data: items });
    } catch (error) {
        console.error('  error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
