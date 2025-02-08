import { Auth } from "@/models/auth";

export interface SignInState {
  auth: Auth;
  email: string;
  password: string;
  isLoading: boolean;
}
