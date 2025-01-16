'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface LocationData {
    latitude: number;
    longitude: number;
}

const containerStyle = {
    width: '100%',
    height: '100vh'
};

export default function LiveMap() {
    const [location, setLocation] = useState<LocationData | null>(null);

    const fetchLocationData = async () => {
        try {
            const response = await fetch('/api/data');
            const results = await response.json();
            console.log(results);
            const latestLocation = results.data[0].data.data.location;
            console.log(latestLocation);
            setLocation({ latitude: latestLocation.lat, longitude: latestLocation.lng });
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    };

    useEffect(() => {
        fetchLocationData();
        const interval = setInterval(fetchLocationData, 2000);
        return () => clearInterval(interval);
    }, []);

    if (!location) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-screen h-screen">
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                        lat: location.latitude,
                        lng: location.longitude
                    }}
                    zoom={13}
                >
                    <Marker
                        position={{
                            lat: location.latitude,
                            lng: location.longitude
                        }}
                        title={`Last updated: ${new Date().toLocaleString()}`}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
} 