import { useSelector } from "react-redux";
import { selectAllProducts } from "./cartProducts";

const CartItems = () => {
  const cartProducts = useSelector(selectAllProducts);
  const renderedProducts = cartProducts.map((product) => {
    return (
      <article key={product.id}>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <h3>{product.quantity}</h3>
        <h3>
          Total ={" "}
          {(product.price * product.quantity).toFixed(2)}
        </h3>
      </article>
    );
  });
  return (
    <div>
      <h2>Cart Items</h2>
      {renderedProducts}
    </div>
  );
};

export default CartItems;
