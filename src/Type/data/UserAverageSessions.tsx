export interface userAverageSessionsType {
    USER_AVERAGE_SESSIONS: averageSessionsType[]
}

export interface averageSessionsType {
    userId: number;
    sessions: session
}

interface session {
    day: number;
    sessionLength: number;
}

export interface userAverageSessionsApiType {
    data: averageSessionsType[]
}