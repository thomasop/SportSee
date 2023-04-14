import React from "react";

const SideNav: React.FC = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__maindiv">
        <div className="side-nav__div">
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/iconyoga.png"
            alt=""
          />
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/iconswim.png"
            alt=""
          />
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/iconbike.png"
            alt=""
          />
          <img className="side-nav__img" src="../assets/iconwork.png" alt="" />
        </div>
        <div className="side-nav__divtwo">
          <p className="side-nav__p">Copiryght, SportSee 2020</p>
        </div>
      </div>
    </div>
  );
};

export default SideNav;