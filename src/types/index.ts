export interface Props {}

export type Colaborador = {
  id: number;
  nome: string;
  matricula: number;
  password?: string;
  status: string;
  perfil: string;
};

export interface HoraExtra {
  id: number;
  entrada: string;
  saida: string;
  description: string;
  isApproved: boolean;
}
