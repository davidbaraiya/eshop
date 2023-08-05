// import { createSlice } from "@reduxjs/toolkit";

// // const { allproductsData } = useSelector((state) => state.products);
// // console.log(allproductsData);

// const filtersProductSlice = createSlice({
//   name: "filtersProductSlice",
//   initialState: {
//     products: [],
//     loading: false,
//     error: null,
//     priceRangeProducts: [],
//   },
//   reducers: {
//     getAllProductsForFilter: (state, action) => {
//       state.products = action.payload;
//     },
//     priceRangeFilter: (state, action) => {
//       const [minPrice, maxPrice] = action.payload;
//       state.priceRangeProducts = state.products?.filter(
//         (item) => item.price >= minPrice && item.price <= maxPrice
//       );
//     },
//   },
// });

// export const { getAllProductsForFilter, priceRangeFilter } =
//   filtersProductSlice.actions;
// export default filtersProductSlice.reducer;
