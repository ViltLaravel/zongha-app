import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInState } from "../_state/sign-in-state";
import { Auth } from "@/models/auth";

export const initialState: SignInState = {
  auth: {
    token: "",
    isAuthenticated: false,
  },
  email: "",
  password: "",
  isLoading: false,
};

export const signInSlice = createSlice({
  name: "signInSlice",
  initialState,
  reducers: {
    setAuthToken(state: SignInState, action: PayloadAction<Auth>) {
      return {
        ...state,
        auth: action.payload,
      };
    },
    clearAuthToken(state: SignInState, action: PayloadAction<Auth>) {
      return {
        ...state,
        auth: action.payload,
      };
    },
    emailChanged(state: SignInState, action: PayloadAction<string>) {
      return {
        ...state,
        email: action.payload,
      };
    },
    passwordChanged(state: SignInState, action: PayloadAction<string>) {
      return {
        ...state,
        password: action.payload,
      };
    },
    loadingChanged(state: SignInState, action: PayloadAction<boolean>) {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
});

export const {
  setAuthToken,
  clearAuthToken,
  emailChanged,
  passwordChanged,
  loadingChanged,
} = signInSlice.actions;

export default signInSlice.reducer;
