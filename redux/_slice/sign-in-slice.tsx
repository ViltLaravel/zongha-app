import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignInState } from "../_state/sign-in-state";
import { Auth } from "@/models/auth";
import { User } from "@/models/user";

export const initialState: SignInState = {
  auth: {
    token: "",
    isAuthenticated: false,
  },
  email: "",
  password: "",
  isLoading: false,
  user: {
    id: "",
    email: "",
    name: "",
    email_verified_at: "",
    created_at: "",
    updated_at: "",
  },
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
    userLoaded(state: SignInState, action: PayloadAction<User>) {
      return {
        ...state,
        user: action.payload,
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
  userLoaded,
} = signInSlice.actions;

export default signInSlice.reducer;
