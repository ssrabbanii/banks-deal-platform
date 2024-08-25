import axios from "axios";

const API_URL = "/api/auth";

// Register a new user (bank or admin)
export const register = async (name, email, password, role) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password,
      role, // 'bank' or 'admin'
    });
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response.data.message);
    throw error;
  }
};

// Login user (bank or admin)
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response.data.message);
    throw error;
  }
};
