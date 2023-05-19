import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  apiErrors: [],
  recipes: [],
};

export const getIndexPage = createAsyncThunk(
  "index/getIndexPage",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&number=24"
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const indexSlice = createSlice({
  name: "index",
  initialState,
  reducers: {},
  extraReducers: {
    [getIndexPage.pending]: (state) => {
      state.loading = true;
    },

    [getIndexPage.fulfilled]: (state, action) => {
      state.recipes = action?.payload.data.recipes;
      state.loading = false;
    },
  },
});

export default indexSlice.reducer;
