import "./Products.css";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="productContainer">
      <div className="productCategories">
        <ul className="ul">
          <li>
            <Link>
              <button>Men</button>
            </Link>
          </li>
          <li>
            <Link>
              <button>Women</button>
            </Link>
          </li>
          <li>
            <Link>
              <button>Children</button>
            </Link>
          </li>
          <li>
            <Link>
              <button>Accesories</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="products">Products</div>
    </div>
  );
};

export default Products;
