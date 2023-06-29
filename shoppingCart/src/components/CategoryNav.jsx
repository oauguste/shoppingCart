import { Link } from "react-router-dom";
import "./CategoryNav.css";

const CategoryNav = () => {
  return (
    <div className="productCategories">
      <ul className="ul">
        <li>
          <Link to="/products/men">
            <button>Men</button>
          </Link>
        </li>
        <li>
          <Link to="/products/women">
            <button>Women</button>
          </Link>
        </li>
        <li>
          <Link to="/products/children">
            <button>Children</button>
          </Link>
        </li>
        <li>
          <Link to="/products/accessories">
            <button>Accessories</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryNav;
