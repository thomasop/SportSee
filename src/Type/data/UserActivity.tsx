export interface userActivityType {
    USER_ACTIVITY: activityType[]
}

export interface activityType {
    userId: number;
    sessions: session
}

interface session {
    day: string;
    kilogram: number;
    calories: number;
}

export interface activityApiType {
    data: activityType
}