import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataMain } from "../Service/GetData";
import { mainType } from "../Type/data/UserMain";

const DisplayMainData: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<null | mainType>(null);
  return (
    <>
      <GetDataMain data={setData} userId={Number(id)} />
      <div className="display">
        <h1 className="display__h1">
          Bonjour
          <span className="display__span"> {data?.userInfos.firstName}</span>
        </h1>
        <p className="display__p">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </>
  );
};

export default DisplayMainData;
