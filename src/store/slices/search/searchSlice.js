import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  apiErrors: [],
  searchData: [],
};

export const getSearchThunk = createAsyncThunk(
  "index/getIndexPage",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=b57efb62940e4fdfbdeb2e2a7e00ad8f&query=${payload.search}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const searchSlice = createSlice({
  name: "index",
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchThunk.pending]: (state) => {
      state.loading = true;
    },

    [getSearchThunk.fulfilled]: (state, action) => {
      state.searchData = action?.payload.data.results;
      state.loading = false;
    },
  },
});

export default searchSlice.reducer;
