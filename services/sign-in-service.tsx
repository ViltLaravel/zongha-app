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

export async function index(token?: string) {
  try {
    const res = await fetch(`http://209.38.56.190:8000/api/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await res.json();
  } catch (error) {
    console.error("Fetching user error:", error);
    throw error;
  }
}
