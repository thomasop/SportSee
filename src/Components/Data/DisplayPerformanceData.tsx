import { useState } from "react";
import { GetDataPerformance } from "../../Service/GetData";
import { useParams } from "react-router-dom";
import { PerformanceType } from "../../Type/data/UserPerformance";
import DisplayRadar from "../Chart/DisplayRadar";

/**
 * React component - Get performance data from service and display performance data
 * @return {JSX.Element}
 */
const DisplayPerformanceData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | PerformanceType>(null);
  return (
    <>
      <GetDataPerformance setData={setData} userId={Number(id)} />
      {data != null && <DisplayRadar data={data} />}
    </>
  );
};

export default DisplayPerformanceData;
