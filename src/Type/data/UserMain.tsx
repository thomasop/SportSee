export interface userMainType {
    USER_MAIN_DATA: mainType[]
}

export interface mainType {
    id: number;
    userInfos: userInfo;
    todayScore: number;
    keyData: keyData;
}

interface userInfo {
    firstName: string;
    lastName: string;
    age: number;
}

interface keyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
}

export interface userMainApiType {
    data: mainType[]
}