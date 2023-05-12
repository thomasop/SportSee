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

/**
 * React component - Get activity data
 * @param {UserActivityPropType} Props
 * @param {Dispatch<SetStateAction<null | ActivityType>>} Props.setData - setter for edit useState in DisplayActivityData component
 * @param {number} Props.userId - id of the user
 * @return {null}
 */
export const GetDataActivity = ({
  setData,
  userId,
}: UserActivityPropType): null => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataActivity.json");
        const json: UserActivityType = await response.json();
        const one = json.USER_ACTIVITY.filter((o) => o.userId === userId);
        setData(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/activity`
        );
        const json: ActivityApiType = await response.json();
        setData(Object.values(json)[0]);
      };
      getData();
    }
  }, [setData, userId]);

  return null;
};

/**
 * React component - Get average sessions data
 * @param {UserAverageSessionsPropType} Props
 * @param {Dispatch<SetStateAction<null | AverageSessionsType>>} Props.setData - setter for edit useState in DisplayAverageData component
 * @param {number} Props.userId - id of the user
 * @return {null}
 */
export const GetDataAverageSessions = ({
  setData,
  userId,
}: UserAverageSessionsPropType): null => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataAverageSessions.json");
        const json: UserAverageSessionsType = await response.json();
        const one = json.USER_AVERAGE_SESSIONS.filter(
          (o) => o.userId === userId
        );

        setData(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/average-sessions`
        );
        const json: UserAverageSessionsApiType = await response.json();
        setData(Object.values(json)[0]);
      };
      getData();
    }
  }, [setData, userId]);

  return null;
};

/**
 * React component - Get main data
 * @param {UserMainPropType} Props
 * @param {Dispatch<SetStateAction<null | MainType>>} Props.setData - setter for edit useState in DisplayMainData component
 * @param {number} Props.userId - id of the user
 * @return {null}
 */
export const GetDataMain = ({ setData, userId }: UserMainPropType): null => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataMain.json");
        const json: UserMainType = await response.json();
        const one = json.USER_MAIN_DATA.filter((o) => o.id === userId);
        setData(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}`
        );
        const json: UserMainApiType = await response.json();
        setData(Object.values(json)[0]);
      };
      getData();
    }
  }, [setData, userId]);

  return null;
};

/**
 * React component - Get performance data
 * @param {UserPerformancePropType} Props
 * @param {Dispatch<SetStateAction<null | PerformanceType>>} Props.setData - setter for edit useState in DisplayPerformanceData component
 * @param {number} Props.userId - id of the user
 * @return {null}
 */
export const GetDataPerformance = ({
  setData,
  userId,
}: UserPerformancePropType): null => {
  useEffect(() => {
    if (process.env.REACT_APP_SOURCE === "mock") {
      const getData = async () => {
        const response = await fetch("../data/dataPerformance.json");
        const json: UserPerformanceType = await response.json();
        const one = json.USER_PERFORMANCE.filter((o) => o.userId === userId);
        setData(one[0]);
      };
      getData();
    } else if (process.env.REACT_APP_SOURCE === "api") {
      const getData = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_HOST}/user/${userId}/performance`
        );
        const json: UserPerformanceApiType = await response.json();
        setData(Object.values(json)[0]);
      };
      getData();
    }
  }, [setData, userId]);

  return null;
};
