import backgroundImage from "../assets/shopping-2616824_1920.jpg";

import "./MainPage.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="mainContent">
      <div className="backgroundImage">
        <img
          className="image"
          src={backgroundImage}
          alt="background image"
        />
      </div>
      <div className="text">
        <button className="button">
          <Link to="/Products">Enter</Link>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
