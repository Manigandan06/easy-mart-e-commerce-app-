import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clearAll: (state) => {
      state.value = [];
    },
  },
});

export const { addToCart, clearAll } = cartSlice.actions;

export default cartSlice.reducer;
