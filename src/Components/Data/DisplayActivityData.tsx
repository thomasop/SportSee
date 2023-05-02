import React, { useState } from "react";
import DisplayBar from "../Chart/DisplayBar";
import { GetDataAcitvity } from "../../Service/GetData";
import { useParams } from "react-router-dom";
import { ActivityType } from "../../Type/data/UserActivity";

const DisplayActivityData = (): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | ActivityType>(null);
  return (
    <>
      <GetDataAcitvity data={setData} userId={Number(id)} />
      <DisplayBar data={data} />
    </>
  );
};

export default DisplayActivityData;
