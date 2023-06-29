import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
import NavHeader from "./NavHeader";
import "./RouteSwitch.css";
import Products from "./Products";
import App from "../App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavHeader className="navHeader" />
      <Routes className="routeContainer">
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
