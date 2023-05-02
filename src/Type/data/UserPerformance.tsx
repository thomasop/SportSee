export interface UserPerformanceType {
  USER_PERFORMANCE: PerformanceType[];
}

export interface PerformanceType {
  userId: number;
  kind: Kind;
  data: Data[];
}

interface Kind {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
}

interface Data {
  value: number;
  kind: number;
}

export interface UserPerformanceApiType {
  data: PerformanceType[];
}

export interface NewPerformanceData {
  id: string;
  value: number;
  kind: number;
}
