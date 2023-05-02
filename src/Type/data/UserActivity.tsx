export interface UserActivityType {
  USER_ACTIVITY: ActivityType[];
}

export interface ActivityType {
  userId: number;
  sessions: Session[];
}

interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export interface ActivityApiType {
  data: ActivityType;
}

export interface NewActivityData {
  id: string;
  day: string;
  kilogram: number;
  calories: number;
}
