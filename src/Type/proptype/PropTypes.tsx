import { Dispatch, SetStateAction } from "react";
import { ActivityType } from "../data/UserActivity";
import { AverageSessionsType } from "../data/UserAverageSessions";
import { MainType } from "../data/UserMain";
import { PerformanceType } from "../data/UserPerformance";

export interface UserActivityPropType {
  setData: Dispatch<SetStateAction<ActivityType | null>>;
  userId: number;
}
export interface UserAverageSessionsPropType {
  setData: Dispatch<SetStateAction<null | AverageSessionsType>>;
  userId: number;
}
export interface UserMainPropType {
  setData: Dispatch<SetStateAction<null | MainType>>;
  userId: number;
}
export interface UserPerformancePropType {
  setData: Dispatch<SetStateAction<null | PerformanceType>>;
  userId: number;
}

export interface DisplayKeyDataProptype {
  data: number | undefined;
  unit: string;
  image: string;
  name: string;
}

export interface DisplayBarProptype {
  data: ActivityType;
}

export interface DisplayLineProptype {
  data: null | AverageSessionsType;
}

export interface DisplayRadarProptype {
  data: PerformanceType | null;
}

export interface DisplayRadialProptype {
  data: MainType | null;
}

export interface DisplayMainDataProptype {
  type: string;
}
