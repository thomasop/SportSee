export interface UserMainType {
  USER_MAIN_DATA: MainType[];
}

export interface MainType {
  id: number;
  userInfos: UserInfo;
  todayScore: number;
  score: number;
  keyData: KeyData;
}

interface UserInfo {
  firstName: string;
  lastName: string;
  age: number;
}

interface KeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

export interface UserMainApiType {
  data: MainType[];
}
