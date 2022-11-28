import { createContext } from "react";
import { Colaborador } from "../types";

export type AuthContextType = {
  colaborador: Colaborador | null;
  signin: (matricula: string, senha: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
