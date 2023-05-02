import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  TooltipProps
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
const CustomizedLegend = ({ payload }: TooltipProps<ValueType, NameType>): JSX.Element | null => {
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

/*
<div className="dashboard__flex--score--circle"></div>
<ResponsiveContainer width="40%" height="100%">
            <RadialBarChart
              innerRadius="170%"
              outerRadius="140%"
              barSize={12}
              data={value}
              startAngle={90}
              endAngle={360}
            >
              <RadialBar dataKey="value" cornerRadius={10}  />
              <circle cx="50%" cy="50%" fill="white" r="30%"></circle>
            </RadialBarChart>
          </ResponsiveContainer>
*/
/*
//<circle cx="50%" cy="50%" fill="white" r="20%"></circle>
<Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="top"
                align="center"
                payload={value}
                content={<CustomizedLegend />}
              />
*/


/* <PieChart width={400} height={500}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart> */
/* <RadialBarChart
              innerRadius={800}
              outerRadius={70}
              barSize={8}
              data={value}
              startAngle={90}
              endAngle={angle}
            >
              <RadialBar dataKey="value" cornerRadius={10} />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="top"
                align="center"
                payload={value}
                content={<CustomizedLegend />}
              />
            </RadialBarChart> */

/*
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  TooltipProps,
  PolarAngleAxis,
  PieChart,
  Pie,
} from "recharts";
import { mainType } from "../../Type/data/UserMain";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";

interface proptype {
  data: mainType | null;
}

const CustomizedLegend = ({ payload }: TooltipProps<ValueType, NameType>) => {
  if (payload && payload.length) {
    return (
      <div className="custom-legend">
        <div className="score-title">Score</div>
        <h2 className="paddinglegend legend">{payload[0].value + "%"}</h2>
        <span className="paddinglegend">de votre</span>
        <span className="paddinglegend">objectif</span>
      </div>
    );
  }
  return null;
};

const DisplayRadial: React.FC<proptype> = ({ data }) => {
  let scorePercent = data?.todayScore! * 100;
  //data?.todayScore! ? scorePercent += data?.todayScore! * 100 : scorePercent += data?.score! * 100
  let angle = 360 / (100 / scorePercent) + 90;
  const value = [{ value: scorePercent }];
  const valueeee = [{ value: 100 }];
  let test = "100%"
  let teste = "100%"
  return (
    <>
      {data && (
        <>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <PieChart>
              <Pie
                data={valueeee}
                dataKey="value"
                innerRadius={0}
                outerRadius={60}
                fill="#FFFFFF"
                isAnimationActive={false}
              />
              <Pie
                data={value}
                dataKey="value"
                outerRadius={70}
                cornerRadius={10}
                innerRadius={60}
                startAngle={90}
                endAngle={angle}
                fill="#ff0000"
              />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="top"
                align="center"
                payload={value}
                content={<CustomizedLegend />}
              />
            </PieChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};
            */