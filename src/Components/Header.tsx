import { Link } from "react-router-dom";

/**
 * React component - Display header html
 * @return {JSX.Element}
 */
const Header = (): JSX.Element => {
  return (
    <header className="header">
      <p className="header__p">
        <Link to={"/"}>
          <img className="header__img" src="../assets/logo.png" alt="" />
        </Link>
      </p>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <Link className="header__a" to="/">
              Accueil
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/profil">
              Profil
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/settings">
              Réglages
            </Link>
          </li>
          <li className="header__li">
            <Link className="header__a" to="/community">
              Communité
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
