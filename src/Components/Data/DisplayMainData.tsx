import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataMain } from "../../Service/GetData";
import { MainType } from "../../Type/data/UserMain";
import DisplayKeyData from "./DisplayKeyData";

interface proptype {
  type: string;
}

let ar: string[][] = [
  ["calorieCount", "kcal", "calories-icon.png", "Calories"],
  ["proteinCount", "g", "protein-icon.png", "Proteines"],
  ["carbohydrateCount", "g", "carbs-icon.png", "Glucides"],
  ["lipidCount", "g", "fat-icon.png", "Lipides"],
];

const DisplayMainData: React.FC<proptype> = ({ type }) => {
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
    </>
  );
};

export default DisplayMainData;
