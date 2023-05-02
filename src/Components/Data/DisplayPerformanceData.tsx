import React, { useState } from "react";
import { GetDataPerformance } from "../../Service/GetData";
import { useParams } from "react-router-dom";
import { PerformanceType } from "../../Type/data/UserPerformance";
import DisplayRadar from "../Chart/DisplayRadar";

const DisplayPerformanceData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | PerformanceType>(null);
  return (
    <>
      <GetDataPerformance data={setData} userId={Number(id)} />
      <DisplayRadar data={data} />
    </>
  );
};

export default DisplayPerformanceData;
