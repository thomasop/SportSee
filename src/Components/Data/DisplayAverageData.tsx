import { useState } from "react";
import { GetDataAverageSessions } from "../../Service/GetData";
import DisplayLine from "../Chart/DisplayLine";
import { useParams } from "react-router-dom";
import { AverageSessionsType } from "../../Type/data/UserAverageSessions";

/**
 * React component - Get average data from service and display average data
 * @return {JSX.Element}
 */
const DisplayAverageData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | AverageSessionsType>(null);
  return (
    <>
      <GetDataAverageSessions data={setData} userId={Number(id)} />
      {data != null && <DisplayLine data={data} />}
    </>
  );
};

export default DisplayAverageData;
