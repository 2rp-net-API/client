import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  //baseURL: process.env.BACKEND_API_URL,
  baseURL: "http://localhost:3001/",
  headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
});

export default api;
