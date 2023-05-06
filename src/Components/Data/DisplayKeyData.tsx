import React from "react";
import { DisplayKeyDataProptype } from "../../Type/proptype/PropTypes";

/**
 * React component - Display key data
 * @param {DisplayKeyDataProptype} Props
 * @param {number | undefined} Props.data
 * @param {string} Props.unit
 * @param {string} Props.image
 * @param {string} Props.name
 * @returns {JSX.Element}
 */
const DisplayKeyData = ({
  data,
  unit,
  image,
  name,
}: DisplayKeyDataProptype): JSX.Element => {
  return (
    <div className="DisplayKeyData">
      <img
        className="DisplayKeyData__img"
        src={`../assets/keyData/${image}`}
        alt=""
      />
      <div className="DisplayKeyData__div">
        <p className="DisplayKeyData__p DisplayKeyData__p--font">
          {data}
          {unit}
        </p>
        <p className="DisplayKeyData__p">{name}</p>
      </div>
    </div>
  );
};

export default DisplayKeyData;
