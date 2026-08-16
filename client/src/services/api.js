import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  timeout: 10000
});

export const getProjects = () => api.get("/projects");
export const sendMessage = (payload) => api.post("/contact", payload);
export const getHealth = () => api.get("/health");

export default api;
