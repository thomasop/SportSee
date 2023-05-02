import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { DisplayBarProptype } from "../../Type/proptype/PropTypes";
import { NewActivityData } from "../../Type/data/UserActivity";

/**
 * Function - Custom tool tip
 * @param {TooltipProps<ValueType, NameType>} Props
 * @param {boolean | undefined} Props.active
 * @param {Payload<ValueType, NameType>[] | undefined} Props.payload
 * @return {JSX.Element | null}
 */
const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>): JSX.Element | null => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[1].value}kg`}</p>
        <p className="label">{`${payload[0].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

/**
 * React component - Display bar chart
 * @param {DisplayBarProptype} Props
 * @param {ActivityType | null} Props.data
 * @return {JSX.Element}
 */
const DisplayBar = ({ data }: DisplayBarProptype): JSX.Element => {
  const [test, setTest] = useState<undefined | NewActivityData[]>(undefined);
  useEffect(() => {
    if (data) {
      let test = data.sessions.map((session) => {
        return {
          id: new Date(session.day).getDate().toString(),
          ...session,
        };
      });
      setTest(test);
    }
  }, [data]);
  return (
    <>
      {data && (
        <>
          <ResponsiveContainer width="100%">
            <BarChart
              width={658}
              height={450}
              data={test}
              barSize={7}
              margin={{ top: 102, bottom: 28 }}
            >
              <text
                x="32px"
                y="26px"
                dy={+12}
                style={{ fill: "#20253A" }}
                className="barText"
                width={200}
              >
                Activité quotidienne
              </text>
              <XAxis dataKey="id" axisLine={false} tickLine={false} dy={15} />
              <YAxis
                yAxisId="right"
                dataKey="calories"
                orientation="left"
                axisLine={false}
                tickLine={false}
                display={"none"}
              />
              <YAxis
                yAxisId="left"
                dataKey="kilogram"
                domain={[68, 81]}
                orientation="right"
                axisLine={false}
                tickLine={false}
              />
              <CartesianGrid
                strokeDasharray={1}
                horizontal={true}
                vertical={false}
              />
              <Tooltip
                content={CustomTooltip}
                wrapperStyle={{ outline: "none" }}
              />
              <Legend
                verticalAlign="top"
                align="right"
                iconSize={8}
                wrapperStyle={{ top: "24px", right: "26px" }}
                formatter={(value, entry, index) => (
                  <span className="text-color-class">{value}</span>
                )}
                payload={[
                  {
                    id: "kilogram",
                    value: "Poids (kg)",
                    type: "circle",
                    color: "#282D30",
                  },
                  {
                    id: "calories",
                    value: "Calories brûlées (kCal)",
                    type: "circle",
                    color: "#E60000",
                  },
                ]}
              />
              <Bar
                yAxisId="right"
                dataKey="calories"
                fill="#282D30"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                yAxisId="left"
                dataKey="kilogram"
                fill="#E60000"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default DisplayBar;
