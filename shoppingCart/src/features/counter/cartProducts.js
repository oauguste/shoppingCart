import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartProducts = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const selectAllProducts = (state) => state.products;

export const { addToCart } = cartProducts.actions;

export default cartProducts.reducer;
