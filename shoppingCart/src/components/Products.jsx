import { Routes, Route } from "react-router-dom";
import CategoryNav from "./CategoryNav";
import "./Products.css";
import Product from "./Product";

const Products = () => {
  return (
    <div className="productsContainer">
      <CategoryNav />
      <Routes>
        <Route
          path="/"
          element={<Product category="all" />}
        />
        <Route path=":category" element={<Product />} />
      </Routes>
    </div>
  );
};

export default Products;
