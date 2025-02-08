import { signIn } from "@/services/sign-in-service";

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  try {
    const result = await signIn(formData);
    return result;
  } catch (e) {
    console.log("Something went wrong!", e);
    return {
      success: false,
      error: e,
    };
  }
}
