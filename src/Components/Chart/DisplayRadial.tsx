import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  TooltipProps,
} from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import { DisplayRadialProptype } from "../../Type/proptype/PropTypes";

/**
 * Function - Custom legend
 * @param {TooltipProps<ValueType, NameType>} Props
 * @param {Payload<ValueType, NameType>[] | undefined} Props.payload
 * @return {JSX.Element | null}
 */
const CustomizedLegend = ({
  payload,
}: TooltipProps<ValueType, NameType>): JSX.Element | null => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <div className="score-title">Score</div>
        <div className="legend-abos">
          <h2 className="paddinglegend legend">{payload[0].value + "%"}</h2>
          <span className="paddinglegend">de votre</span>
          <span className="paddinglegend">objectif</span>
        </div>
      </div>
    );
  }
  return null;
};

/**
 *
 * @param {DisplayRadialProptype} Props
 * @param {MainType | null} Props.data
 * @return {JSX.Element}
 */
const DisplayRadial = ({ data }: DisplayRadialProptype): JSX.Element => {
  let scorePercent = 0;
  data?.todayScore!
    ? (scorePercent += data?.todayScore! * 100)
    : (scorePercent += data?.score! * 100);
  let angle = 360 / (100 / scorePercent) + 90;
  const value = [{ value: scorePercent, fill: "#ff0000" }];
  return (
    <>
      {data && (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius={300}
              outerRadius={60}
              barSize={8}
              data={value}
              startAngle={90}
              endAngle={angle}
            >
              <RadialBar dataKey="value" cornerRadius={10} />
              <circle cx="50%" cy="50%" fill="white" r="55px"></circle>
              <Legend
                iconSize={10}
                layout="horizontal"
                verticalAlign="middle"
                align="center"
                payload={value}
                content={<CustomizedLegend />}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default DisplayRadial;
