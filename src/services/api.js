import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const loginUser = async (email, password) => {
  // In a real app, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "student@portal.com" && password === "password") {
        resolve({ success: true, user: { name: "John Doe", email } });
      } else {
        resolve({ success: false, error: "Invalid credentials" });
      }
    }, 500);
  });
};

export const signupUser = async (name, email, password) => {
  // In a real app, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
};
