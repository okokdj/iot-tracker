// Define interfaces for type safety
export interface LocationData {
    lat: number;
    lng: number;
    accuracy: number;
    source: string;
    state: string;
    geozones: any[];
    address: string;
    scannedAps: ScannedAp[];
}

export interface ScannedAp {
    mac: string;
    order: number;
    rssi: number;
}

export interface BatteryInfo {
    batteryStatus: string;
    batteryLevelPercentage: number;
    batteryEstimationCalibrated: boolean;
    estimatedRemainingBatteryLife: number;
    updatedAt: string;
}

export interface TrackingData {
    dataType: string;
    data: {
        location: LocationData;
        batteryInfo: BatteryInfo;
        id: number;
        time: string;
        insertTime: string;
        name: string;
        serial: string;
        sigfoxDeviceId: string;
        seqNbr: number;
    };
    operation: string;
}
