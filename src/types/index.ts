// export type Colaborador = {
//   id: number;
//   nome: string;
//   matricula: number;
//   password?: string;
//   status: string;
//   perfil: string;
// };

export interface Colaborador {
  idcolaborador: number;
  matricula: number;
  nome: string;
  senha: string;
  perfil: string;
  status: string;
}

export interface HoraExtra {
  entrada: Date;
  saida: Date;
  description: string;
  colaborador: Colaborador;
  isApproved: boolean;
  idhoraextra: number;
}
