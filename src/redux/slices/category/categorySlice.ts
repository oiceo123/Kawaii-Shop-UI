import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Category } from "./types";
import axios from "../../../api";

type CategoryState = {
  data: Category[];
  loading: boolean;
  error: string;
};

const initialState: CategoryState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchCategoryDataAsync = createAsyncThunk<
  Category[],
  { title: string } | undefined
>(
  "fetchCategoryDataAsync",
  async (filter: { title?: string } | undefined = {}) => {
    const { title } = filter;
    try {
      const res = await axios.get("/appinfo/categories", {
        params: { title },
      });
      return res.data;
    } catch {
      return new Error("ไม่สามารถดึงข้อมูลได้");
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryDataAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCategoryDataAsync.fulfilled,
      (state, action: PayloadAction<Category[]>) => {
        state.loading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(fetchCategoryDataAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "เกิดข้อผิดพลาด";
    });
  },
});

export default categorySlice.reducer;
