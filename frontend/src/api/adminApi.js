import axios from "axios";

const API_URL = "/api/admin";

// Fetch all registered banks
export const fetchAllBanks = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/banks`, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching banks:", error.response.data.message);
    throw error;
  }
};
