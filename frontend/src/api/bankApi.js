import axios from "axios";

const API_URL = "/api/banks";

// Submit API link
export const submitApiLink = async (apiLink, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_URL}/submit-api`,
      { apiLink },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting API link:", error.response.data.message);
    throw error;
  }
};

// Request help from admin
export const requestHelp = async (message, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(
      `${API_URL}/request-help`,
      { message },
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting help:", error.response.data.message);
    throw error;
  }
};
