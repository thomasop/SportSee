import { Dispatch, SetStateAction } from "react";
import { activityType } from "../data/UserActivity";
import { averageSessionsType } from "../data/UserAverageSessions";
import { mainType } from "../data/UserMain";
import { performanceType } from "../data/UserPerformance";

export interface userActivityPropType {
  data: Dispatch<SetStateAction<activityType | null>>;
  userId: number;
}
export interface userAverageSessionsPropType {
  data: Dispatch<SetStateAction<null | averageSessionsType>>;
  userId: number;
}
export interface userMainPropType {
  data: Dispatch<SetStateAction<null | mainType>>;
  userId: number;
}
export interface userPerformancePropType {
  data: Dispatch<SetStateAction<null | performanceType>>;
  userId: number;
}
