import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { DisplayRadarProptype } from "../../Type/proptype/PropTypes";
import { NewPerformanceData } from "../../Type/data/UserPerformance";

const DisplayRadar = ({ data }: DisplayRadarProptype): JSX.Element => {
  const [newData, setNewData] = useState<undefined | NewPerformanceData[]>(undefined);
  useEffect(() => {
    if (data) {
      const ar = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio",
      ];
      let setData = data.data.reverse().map((d, index) => {
        return {
          id: ar[index],
          ...d
        };
      });
      setNewData(setData);
    }
  }, [data]);
  return (
    <>
      {data && (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart
              cx="50%"
              cy="50%"
              outerRadius="70%"
              data={newData}
              margin={{ left: 40 }}
            >
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey={"id"}
                tick={{ fill: "white", fontSize: 15, dy: 4 }}
              />
              <Radar
                name="Mike"
                dataKey="value"
                fill="#FF0101"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </>
  );
};

export default DisplayRadar;
