import React, { useState } from "react";
import { GetDataAverageSessions } from "../../Service/GetData";
import DisplayLine from "../Chart/DisplayLine";
import { useParams } from "react-router-dom";
import { AverageSessionsType } from "../../Type/data/UserAverageSessions";

const DisplayAverageData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | AverageSessionsType>(null);
  return (
    <>
      <GetDataAverageSessions data={setData} userId={Number(id)} />
      <DisplayLine data={data} />
    </>
  );
};

export default DisplayAverageData;
