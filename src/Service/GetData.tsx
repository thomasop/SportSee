import { useEffect } from "react";
import { UserActivityType, ActivityApiType } from "../Type/data/UserActivity";
import {
  UserAverageSessionsType,
  UserAverageSessionsApiType,
} from "../Type/data/UserAverageSessions";
import { UserMainType, UserMainApiType } from "../Type/data/UserMain";
import {
  UserPerformanceType,
  UserPerformanceApiType,
} from "../Type/data/UserPerformance";
import {
  UserAverageSessionsPropType,
  UserActivityPropType,
  UserMainPropType,
  UserPerformancePropType,
} from "../Type/proptype/PropTypes";

export const GetDataActivity: React.FC<UserActivityPropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataActivity.json");
        const json: UserActivityType = await response.json();
        const one = json.USER_ACTIVITY.filter((o) => o.userId === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/activity`
        );
        const json: ActivityApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataAverageSessions: React.FC<UserAverageSessionsPropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataAverageSessions.json");
        const json: UserAverageSessionsType = await response.json();
        const one = json.USER_AVERAGE_SESSIONS.filter(
          (o) => o.userId === userId
        );

        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/average-sessions`
        );
        const json: UserAverageSessionsApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataMain: React.FC<UserMainPropType> = ({ data, userId }) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataMain.json");
        const json: UserMainType = await response.json();
        const one = json.USER_MAIN_DATA.filter((o) => o.id === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}`
        );
        const json: UserMainApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataPerformance: React.FC<UserPerformancePropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataPerformance.json");
        const json: UserPerformanceType = await response.json();
        const one = json.USER_PERFORMANCE.filter((o) => o.userId === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/performance`
        );
        const json: UserPerformanceApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};
