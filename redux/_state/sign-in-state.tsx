import { Auth } from "@/models/auth";
import { User } from "@/models/user";

export interface SignInState {
  auth: Auth;
  email: string;
  password: string;
  isLoading: boolean;
  user: User;
}
