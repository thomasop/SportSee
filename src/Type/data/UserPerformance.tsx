export interface userPerformanceType {
    USER_PERFORMANCE: performanceType[]
}

export interface performanceType {
    userId: number;
    kind: kind;
    data: data;
}

interface kind {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
}

interface data {
    value: number;
    kind: number;
}

export interface userPerformanceApiType {
    data: performanceType[]
}