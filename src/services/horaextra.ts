import { Api } from "../providers"
import { HoraExtra } from "../types"

const getAll = () => Api.get<HoraExtra[]>('/horaextra/list')

export const horaextra = {
  getAll,
}
