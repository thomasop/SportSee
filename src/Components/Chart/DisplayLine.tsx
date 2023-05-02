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
} from "recharts/types/component/DefaultTooltipContent";
import { NewAverageData } from "../../Type/data/UserAverageSessions";
import { DisplayLineProptype } from "../../Type/proptype/PropTypes";

const CustomTooltip = ({
  active,
  payload
}: TooltipProps<ValueType, NameType>): JSX.Element | null => {
  if (active && payload && payload.length) {
    if (payload[0].payload.id !== "") {
      let test = Number(payload[0].value) + 60;
      if (payload[0].payload.id === "D") {
        return (
          <>
            <div className="custom-tooltip-line-back-last"></div>
            <div
              style={{ bottom: test + "px" }}
              className="custom-tooltip-line-last"
            >
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
        
      } else if (payload[0].payload.id === "S") {
        return (
          <>
            <div className="custom-tooltip-line-back-middle saturday-back"></div>
            <div
              style={{ bottom: test + "px" }}
              className="custom-tooltip-line-middle saturday"
            >
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
      }else if (payload[0].payload.id === "V") {
        return (
          <>
            <div className="custom-tooltip-line-back-middle wednesday-back"></div>
            <div
              style={{ bottom: test + "px" }}
              className="custom-tooltip-line-middle wednesday"
            >
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
      } else if (payload[0].payload.id === "J") {
        return (
          <>
            <div className="custom-tooltip-line-back-friday"></div>
            <div
              style={{ bottom: test + "px" }}
              className="custom-tooltip-line-friday"
            >
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
      }else {
        return (
          <>
            <div className="custom-tooltip-line-back"></div>
            <div
              style={{ bottom: test + "px" }}
              className="custom-tooltip-line"
            >
              <p className="label-line">{`${payload[0].value} min`}</p>
            </div>
          </>
        );
      }
    }
  }

  return null;
};

const DisplayLine = ({ data }: DisplayLineProptype): JSX.Element => {
  const [newData, setNewData] = useState<undefined | NewAverageData[]>(undefined);
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
  );
};

export default DisplayLine;
