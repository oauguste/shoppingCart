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
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavHeader className="navHeader" />
      <Routes className="routeContainer">
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<Product />} />
          <Route path=":category" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
