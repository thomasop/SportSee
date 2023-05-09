/**
 * React component - Display side nav html
 * @return {JSX.Element}
 */
const SideNav = (): JSX.Element => {
  return (
    <div className="side-nav">
      <div className="side-nav__maindiv">
        <div className="side-nav__div">
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/sideNav/iconyoga.png"
            alt=""
          />
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/sideNav/iconswim.png"
            alt=""
          />
          <img
            className="side-nav__img side-nav__img--margin"
            src="../assets/sideNav/iconbike.png"
            alt=""
          />
          <img
            className="side-nav__img"
            src="../assets/sideNav/iconwork.png"
            alt=""
          />
        </div>
      </div>
      <div className="side-nav__divtwo">
        <p className="side-nav__p">Copiryght, SportSee 2023</p>
      </div>
    </div>
  );
};

export default SideNav;
