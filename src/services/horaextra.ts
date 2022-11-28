import api from "./api";

const create = () => api.post('/horaextra/create')

export const horaextra = {
  create,
};
