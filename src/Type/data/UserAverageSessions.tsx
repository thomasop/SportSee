export interface UserAverageSessionsType {
  USER_AVERAGE_SESSIONS: AverageSessionsType[];
}

export interface AverageSessionsType {
  userId: number;
  sessions: Session[];
}

interface Session {
  day: number;
  sessionLength: number;
}

export interface UserAverageSessionsApiType {
  data: AverageSessionsType[];
}

export interface NewAverageData {
  id: string;
  day: number;
  sessionLength: number;
}
