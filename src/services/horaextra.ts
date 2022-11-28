import { HoraExtra } from "../types";
import api from "./api";

const create = () => api.post<HoraExtra>("/horaextra/create");

export const horaextra = {
  create,
};
