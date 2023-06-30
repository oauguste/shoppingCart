import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/counter/cartProducts";

export const store = configureStore({
  reducer: {
    products: cartReducer,
  },
});
