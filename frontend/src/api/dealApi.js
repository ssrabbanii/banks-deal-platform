import axios from "axios";

const API_URL = "/api/deals";

// Fetch deals (admin action)
export const fetchDeals = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/fetch-deals`, {}, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching deals:", error.response.data.message);
    throw error;
  }
};

export const getDealById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching deal by ID:", error.response.data.message);
    throw error;
  }
};

// Get all deals to display on the website (public)
export const getAllDeals = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all deals:", error.response.data.message);
    throw error;
  }
};
