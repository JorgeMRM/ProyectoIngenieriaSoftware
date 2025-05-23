import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getRoles = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/roles`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener roles:", error);
    throw error;
  }
};
