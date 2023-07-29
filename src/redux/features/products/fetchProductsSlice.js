import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = "https://fakestoreapi.com/products";

export const fetchProductData = createAsyncThunk("getAllData", async () => {
  try {
    const res = await fetch(base_url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allproductsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.allproductsData = action.payload;
    });
    builder.addCase(fetchProductData.rejected, (state, action) => {
      state.loading = false;
      state.allproductsData = [];
      state.error = action.error.message;
    });
  },
});

// export const { incrmnt } = productsSlice.actions;
export default productsSlice.reducer;
