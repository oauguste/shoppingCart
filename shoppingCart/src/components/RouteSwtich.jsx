import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";

import Products from "./Products";
import App from "../App";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
