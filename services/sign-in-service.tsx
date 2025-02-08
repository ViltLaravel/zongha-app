export async function signIn(formData: FormData) {
  const formObject: Record<string, string> = {};
  formData.forEach((value, key) => {
    formObject[key] = value as string;
  });

  try {
    const response = await fetch(`http://209.38.56.190:8000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });
    return await response.json();
  } catch (error) {
    console.error("Sign-in error:", error);
    throw error;
  }
}
