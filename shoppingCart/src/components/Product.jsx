import "./Product.css";
import { useParams } from "react-router-dom";

import PropTypes from "prop-types";

const Product = () => {
  const allProduct = [
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 1,
      title:
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men",
      image:
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "women",
      image:
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  ];

  const { category } = useParams();

  const categoryToUse = category || "all";

  let product;

  if (categoryToUse === "all") {
    product = allProduct;
  } else {
    product = allProduct.filter(
      (item) => item.category === categoryToUse
    );
  }
  return (
    <div className="productContainer">
      {product.map((item, index) => (
        <div className="productSection" key={index}>
          <img
            className="productImage"
            src={item.image}
            alt={item.title}
          />
          <h3 className="imageProductText">{item.title}</h3>
          <h4 className="imageProductPrice">
            ${item.price.toFixed(2)}
          </h4>
          <button className="addtoCart">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
Product.propTypes = {
  category: PropTypes.string,
};
export default Product;
