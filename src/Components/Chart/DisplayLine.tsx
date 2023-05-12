import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";
import { NewAverageData } from "../../Type/data/UserAverageSessions";
import { DisplayLineProptype } from "../../Type/proptype/PropTypes";

/**
 * Function - Custom tool tip
 * @param {TooltipProps<ValueType, NameType>} Props
 * @param {boolean | undefined} Props.active - if user hover on the chart
 * @param {Payload<ValueType, NameType>[] | undefined} Props.payload - value of element when user hover the chart
 * @return {JSX.Element | null}
 */
const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>): JSX.Element | null => {
  console.log(payload)
  if (active && payload && payload.length) {
    if (payload[0].payload.id !== "") {
      let test = Number(payload[0].value) + 60;
      const render = (
        payload: Payload<ValueType, NameType>[],
        classBack: string,
        classLine: string,
        test: number
      ) => {
        return (
          <>
            <div className={classBack}></div>
            <div style={{ bottom: test + "px" }} className={classLine}>
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
      };
      if (payload[0].payload.id === "D") {
        return render(
          payload,
          "custom-tooltip-line-back-last",
          "custom-tooltip-line-last",
          test
        );
      } else if (payload[0].payload.id === "S") {
        return render(
          payload,
          "custom-tooltip-line-back-middle saturday-back",
          "custom-tooltip-line-middle saturday",
          test
        );
      } else if (payload[0].payload.id === "V") {
        return render(
          payload,
          "custom-tooltip-line-back-middle wednesday-back",
          "custom-tooltip-line-middle wednesday",
          test
        );
      } else if (payload[0].payload.id === "J") {
        return render(
          payload,
          "custom-tooltip-line-back-friday",
          "custom-tooltip-line-friday",
          test
        );
      } else {
        return render(
          payload,
          "custom-tooltip-line-back",
          "custom-tooltip-line",
          test
        );
      }
    }
  }

  return null;
};

/**
 * React component - Display line chart
 * @param {DisplayLineProptype} Props
 * @param {null | AverageSessionsType} Props.data - average sessions data fetch in service
 * @return {JSX.Element}
 */
const DisplayLine = ({ data }: DisplayLineProptype): JSX.Element => {
  const [newData, setNewData] = useState<null | NewAverageData[]>(null);
  useEffect(() => {
    if (data) {
      const arr = [];
      arr.push({ id: "", day: 1, sessionLength: 30 });
      const ar = ["L", "M", "M", "J", "V", "S", "D"];
      data.sessions.map((p, index) => {
        arr.push({
          id: ar[index],
          ...p,
        });
        return {
          id: ar[index],
          ...p,
        };
      });
      arr.push({ id: "", day: 7, sessionLength: 60 });
      setNewData(arr);
    }
  }, [data]);
  return (
    <>
      {newData && (
        <>
          <h2 className="lineChart__title">Durée moyenne des sessions</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={newData} margin={{ top: 70, bottom: 30 }}>
              <XAxis
                dataKey="id"
                axisLine={false}
                tickLine={false}
                padding={{ left: -9, right: -5 }}
                stroke="white"
                dy={19}
              />
              <Tooltip
                cursor={false}
                content={CustomTooltip}
                wrapperStyle={{ outline: "none" }}
                position={{ y: 0 }}
              />
              <Line
                type="monotone"
                dataKey="sessionLength"
                stroke="#FFFFFF"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default DisplayLine;
