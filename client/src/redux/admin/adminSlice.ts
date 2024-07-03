import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { adminAPI } from "../../api/axios";
import { AdminInterface } from "../../interface";

const initialState: AdminInterface = {
  status: "",
  token: "",
  isLoading: false,
  isAuth: false,
};

export const loginAdminThunk = createAsyncThunk(
  "admin/loginAdminThunk",
  async (admin) => {
    const adminLogin = (await adminAPI.login(admin)).data;
    return adminLogin;
  }
);

export const checkAdminThunk = createAsyncThunk(
  "admin/checkAdminThunk",
  async () => {
    const adminCheck = (await adminAPI.check()).data;
    return adminCheck;
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAdminThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdminThunk.fulfilled, (state, action) => {
      state.status = action.payload.message;
      state.token = action.payload.token;
      if (action.payload.token) {
        window.localStorage.setItem("token", action.payload.token);
        state.isAuth = true;
      }
      state.isLoading = false;
    });
    builder.addCase(checkAdminThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(checkAdminThunk.fulfilled, (state, action) => {
      state.token = action.payload.token;
      // debugger
      if (action.payload.token) {
        window.localStorage.setItem("token", action.payload.token);
        state.isAuth = true;
      } else {
        window.localStorage.removeItem("token");
        state.isAuth = false;
      }
      state.isLoading = false;
    });
  },
});

export default adminSlice.reducer;
