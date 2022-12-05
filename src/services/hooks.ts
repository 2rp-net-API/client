import api from "./api";

export const useApi = () => ({
  validateToken: async (token: string) => {
    try {
      const response = await api.post("/validate");
      return response.data;
    } catch (error) {
      return error;
    }
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
