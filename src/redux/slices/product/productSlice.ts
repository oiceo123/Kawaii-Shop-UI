import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductFilter } from "./types";
import axios from "../../../api";

type ProductState = {
  data: Product[];
  loading: boolean;
  error: string;
};

const initialState: ProductState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchProductDataAsync = createAsyncThunk<
  Product[],
  ProductFilter | undefined
>("fetchProductDataAsync", async (filter: ProductFilter | undefined = {}) => {
  const { id, search, page, limit, order_by, sort } = filter;

  try {
    const res = await axios.get("/products", {
      params: { id, search, page, limit, order_by, sort },
    });
    return res.data.data;
  } catch {
    throw new Error("ไม่สามารถดึงข้อมูลได้");
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDataAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchProductDataAsync.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchProductDataAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "เกิดข้อผิดพลาด";
    });
  },
});

export default productSlice.reducer;
