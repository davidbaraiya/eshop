import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const base_url = "https://fakestoreapi.com/products";

export const fetchProductData = createAsyncThunk(
  "products/fetchAllData",
  async () => {
    try {
      const res = await fetch(base_url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    try {
      const res = await fetch(`${base_url}/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allproductsData: [],
    loading: false,
    error: null,
    singleProduct: "",
    singleLoading: false,
    singleError: null,
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

    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.singleLoading = true;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleLoading = false;
      state.singleProduct = action.payload;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.singleLoading = false;
      state.singleProduct = [];
      state.singleError = action.singleError.message;
    });
  },
});

// Export the async actions directly or use them as part of other action creators
// export const { fetchSingleProduct } = productsSlice.actions;
export default productsSlice.reducer;
