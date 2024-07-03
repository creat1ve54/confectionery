import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartAPI } from "../../api/axios";

export const sendCartThunk = createAsyncThunk(
  "cart/sendCartThunk",
  async (cart) => {
    const sendCart = (await cartAPI.send(cart)).data;
    return sendCart;
  }
);

const initialState = {
  status: "",
  isLoading: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendCartThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(sendCartThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.isLoading = false;
    });
  },
});

export default cartSlice.reducer;
