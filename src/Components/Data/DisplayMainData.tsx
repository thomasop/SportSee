import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataMain } from "../../Service/GetData";
import { MainType } from "../../Type/data/UserMain";
import DisplayKeyData from "./DisplayKeyData";
import DisplayRadial from "../Chart/DisplayRadial";
import { DisplayMainDataProptype } from "../../Type/proptype/PropTypes";

let ar: string[][] = [
  ["calorieCount", "kcal", "calories-icon.png", "Calories"],
  ["proteinCount", "g", "protein-icon.png", "Proteines"],
  ["carbohydrateCount", "g", "carbs-icon.png", "Glucides"],
  ["lipidCount", "g", "fat-icon.png", "Lipides"],
];

/**
 * React component - Get main data from service and display main data, radial chart or keyData
 * @param {DisplayMainDataProptype} Props
 * @param {string} Props.type
 * @return {JSX.Element}
 */
const DisplayMainData = ({ type }: DisplayMainDataProptype): JSX.Element => {
  const { id } = useParams();
  const [data, setData] = useState<null | MainType>(null);
  return (
    <>
      <GetDataMain data={setData} userId={Number(id)} />
      {type === "text" && (
        <>
          <div className="display">
            <h1 className="display__h1">
              Bonjour
              <span className="display__span">
                {" "}
                {data?.userInfos.firstName}
              </span>
            </h1>
            <p className="display__p">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
        </>
      )}
      {type === "keyData" && (
        <>
          {ar.map((p, index) => (
            <React.Fragment key={index}>
              {(p[0] === "calorieCount" ||
                p[0] === "proteinCount" ||
                p[0] === "carbohydrateCount" ||
                p[0] === "lipidCount") && (
                <DisplayKeyData
                  data={data?.keyData[p[0]]}
                  unit={p[1]}
                  image={p[2]}
                  type={p[0]}
                  name={p[3]}
                />
              )}
            </React.Fragment>
          ))}
        </>
      )}
      {type === "graph" && (
        <>
          <DisplayRadial data={data} />
        </>
      )}
    </>
  );
};

export default DisplayMainData;
