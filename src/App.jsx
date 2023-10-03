import "./App.css";
import Navbar from "./components/Navbar";
import { HeroD, HeroM, Audiophile, Databiz, Maker, Meet } from "./assets";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="ImgContainer">
          <picture>
            <source media="(max-width:768px)" srcSet={HeroM} />
            <source media="(min-width:769px)" srcSet={HeroD} />
            <img src={HeroM} alt="hero" />
          </picture>
        </div>
        <div className="TxtContainer">
          <h1 className="TxtContainer-Title">Make remote work</h1>
          <p className="TxtContainer-Para">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="TxtContainer-Btn">Learn more</button>
          <div className="TxtContainer-PartnersBox">
            <img src={Databiz} alt="databiz" />
            <img src={Audiophile} alt="audiophile" />
            <img src={Meet} alt="meet" />
            <img src={Maker} alt="maker" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
