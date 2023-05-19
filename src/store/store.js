import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";

import indexSlice from "./slices/index/indexSlice";
import searchSlice from "./slices/search/searchSlice";

// const makeStore = () =>
//   configureStore({
//     reducer: {
//       index: indexSlice,
//     },
//     devTools: true,
//   });
// export default makeStore;

const store = configureStore({
  reducer: {
    index: indexSlice,
    search: searchSlice,
  },
});

export default store;
