import { createSlice } from "@reduxjs/toolkit";

const wishlistProducts = createSlice({
  name: "wishlistProducts",
  initialState: {
    wishlistProducts: JSON.parse(localStorage.getItem("wishlistItems")) || [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const wishlistProductExist = state.wishlistProducts.some(
        (item) => item.id === newItem.id
      );
      if (!wishlistProductExist) {
        state.wishlistProducts.push(action.payload);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistProducts)
        );
      }
    },
    removeToWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistProducts)
      );
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistProducts.actions;
export default wishlistProducts.reducer;
