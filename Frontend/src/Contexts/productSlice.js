import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    addProducts: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
