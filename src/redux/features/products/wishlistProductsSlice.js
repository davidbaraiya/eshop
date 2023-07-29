import { createSlice } from "@reduxjs/toolkit";

const wishlistProducts = createSlice({
  name: "wishlistProducts",
  initialState: {
    wishlistProducts: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const wishlistProductExist = state.wishlistProducts.some(
        (item) => item.id === newItem.id
      );
      if (!wishlistProductExist) {
        state.wishlistProducts.push(action.payload);
      }
    },
    removeToWishlist: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToWishlist, removeToWishlist } = wishlistProducts.actions;
export default wishlistProducts.reducer;
