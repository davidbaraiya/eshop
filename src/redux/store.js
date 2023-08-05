import { configureStore } from "@reduxjs/toolkit";
import fetchProductsReducer from "./features/products/fetchProductsSlice";
import addToCartReducer from "./features/products/addToCartSlice";
import wishlistProductsReducer from "./features/products/wishlistProductsSlice";
import filterProductReducer from "./features/products/filterProductsSlice";

export const store = configureStore({
  reducer: {
    products: fetchProductsReducer,
    inCartProducts: addToCartReducer,
    wishlistProducts: wishlistProductsReducer,
    filterProducts: filterProductReducer,
  },
});
