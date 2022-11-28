import api from "./api";

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validate");
    return response.data;
  },
  signin: async (matricula: string, password: string) => {
    const response = await api.post("/login", { matricula, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
