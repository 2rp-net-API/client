import { useEffect, useState } from "react";
import { useApi } from "../services/hooks";
import { Colaborador } from "../types";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [colaborador, setColaborador] = useState<Colaborador | null>(null);
  const api = useApi();
  const change = false;

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data) {
          setColaborador(data);
        }
      }
    };
    validateToken();
  }, [change]);

  const signin = async (matricula: string, senha: string) => {
    const data = await api.signin(matricula, senha);
    if (data.colaborador && data.token) {
      setColaborador(data.colaborador);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    console.log("signout está sendo executada.");
    setColaborador(null);
    setToken("");
    await api.logout();
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ colaborador, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
