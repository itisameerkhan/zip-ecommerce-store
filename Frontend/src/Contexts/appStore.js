import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const appStore = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default appStore;
