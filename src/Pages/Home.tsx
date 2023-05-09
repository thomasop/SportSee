import Header from "../Components/Header";
import { Link } from "react-router-dom";

/**
 * React component - Home page
 * @return {JSX.Element}
 */
const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="home">
        <section className="home__section">
          <h1 className="home__h1">Choisissez votre utilisateur</h1>
          <div className="home__div">
            <Link className="home__link" to="/dashboard/12">
              Karl
            </Link>
            <Link className="home__link home__link--margin" to="/dashboard/18">
              Cecilia
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
