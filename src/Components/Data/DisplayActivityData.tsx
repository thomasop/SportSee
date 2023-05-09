import { useState } from "react";
import DisplayBar from "../Chart/DisplayBar";
import { GetDataActivity } from "../../Service/GetData";
import { useParams } from "react-router-dom";
import { ActivityType } from "../../Type/data/UserActivity";

/**
 * React component - Get activity data from service and display activity data
 * @return {JSX.Element}
 */
const DisplayActivityData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | ActivityType>(null);
  return (
    <>
      <GetDataActivity data={setData} userId={Number(id)} />
      {data != null && <DisplayBar data={data} />}
    </>
  );
};

export default DisplayActivityData;
