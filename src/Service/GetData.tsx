import React, { useEffect } from "react";
import { userActivityType, activityApiType } from "../Type/data/UserActivity";
import {
  userAverageSessionsType,
  userAverageSessionsApiType,
} from "../Type/data/UserAverageSessions";
import { userMainType, userMainApiType } from "../Type/data/UserMain";
import {
  userPerformanceType,
  userPerformanceApiType,
} from "../Type/data/UserPerformance";
import {
  userAverageSessionsPropType,
  userActivityPropType,
  userMainPropType,
  userPerformancePropType,
} from "../Type/proptype/PropTypes";

export const GetDataAcitvity: React.FC<userActivityPropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataActivity.json");
        const json: userActivityType = await response.json();
        const one = json.USER_ACTIVITY.filter((o) => o.userId === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/activity`
        );
        const json: activityApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataAverageSessions: React.FC<userAverageSessionsPropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataAverageSessions.json");
        const json: userAverageSessionsType = await response.json();
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
        const json: userAverageSessionsApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataMain: React.FC<userMainPropType> = ({ data, userId }) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataMain.json");
        const json: userMainType = await response.json();
        const one = json.USER_MAIN_DATA.filter((o) => o.id === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}`
        );
        const json: userMainApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};

export const GetDataPerformance: React.FC<userPerformancePropType> = ({
  data,
  userId,
}) => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataPerformance.json");
        const json: userPerformanceType = await response.json();
        const one = json.USER_PERFORMANCE.filter((o) => o.userId === userId);
        data(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/performance`
        );
        const json: userPerformanceApiType = await response.json();
        data(Object.values(json)[0]);
      };
      getData();
    }
  }, [data, userId]);

  return null;
};
