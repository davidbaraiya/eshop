import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const addToCart = createSlice({
  name: "addToCart",
  initialState: {
    inCartProducts: JSON.parse(localStorage.getItem("ProductIncart")) || [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCartFun: (state, action) => {
      state.loading = true;
      const newItem = action.payload;
      const isItemExists = state.inCartProducts.some(
        (item) => item.id === newItem.id
      );
      if (isItemExists) {
        toast.warning("Already in the Cart");
      } else {
        state.inCartProducts.push(action.payload);
        toast.success("Added to Cart");
      }
      localStorage.setItem(
        "ProductIncart",
        JSON.stringify(state.inCartProducts)
      );
      state.loading = false;
    },
    removeToCartFun: (state, action) => {
      state.inCartProducts = state.inCartProducts.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem(
        "ProductIncart",
        JSON.stringify(state.inCartProducts)
      );
    },
    incrementQuantity: (state, action) => {
      const newItemId = action.payload;
      const itemToUpdateInc = state.inCartProducts.find(
        (item) => item.id === newItemId
      );

      if (itemToUpdateInc) {
        itemToUpdateInc.quantity = (itemToUpdateInc.quantity || 1) + 1;
      }
      localStorage.setItem(
        "ProductIncart",
        JSON.stringify(state.inCartProducts)
      );
    },

    decrementQuantity: (state, action) => {
      const newItemId = action.payload;
      const itemToUpdateDec = state.inCartProducts.find(
        (item) => item.id === newItemId
      );
      if (itemToUpdateDec) {
        if (itemToUpdateDec.quantity > 1) {
          itemToUpdateDec.quantity = itemToUpdateDec.quantity - 1;
        }
      }
      localStorage.setItem(
        "ProductIncart",
        JSON.stringify(state.inCartProducts)
      );
    },
  },
});

export const {
  addToCartFun,
  removeToCartFun,
  incrementQuantity,
  decrementQuantity,
} = addToCart.actions;
export default addToCart.reducer;
