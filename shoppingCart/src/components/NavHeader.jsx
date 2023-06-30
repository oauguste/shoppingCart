import NavButtons from "./NavButtons";
import "./NavHeader.css";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/counter/cartProducts";
const NavHeader = () => {
  const products = useSelector(selectAllProducts);
  const totalQuantity = products.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <div className="navheader">
      <ul className="list">
        <div className="left">
          <li>
            <NavButtons name="Home" />
          </li>
          <li>
            <NavButtons name="About" />
          </li>
        </div>
        <div className="right">
          <li>
            <NavButtons name="Products" />
          </li>
          <div className="cartButton">
            <li>
              <NavButtons name="Cart" />
            </li>
            <div className="box">{totalQuantity}</div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavHeader;
