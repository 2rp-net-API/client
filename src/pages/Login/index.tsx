import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./style.css";

export const Login = () => {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleMatriculaInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMatricula(event.target.value);
  };

  const handleSenhaInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    if (matricula && senha) {
      const isLogged = await auth.signin(matricula, senha);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Matricula ou senha incorretas");
      }
    }
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sistema de Gerenciamento de Horas Extras e Sobreaviso</h3>
            <div className="form-group mt-3">
              <label>Matricula</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Informe sua matrícula"
                value={matricula}
                onChange={handleMatriculaInput}
              />
            </div>
            <div className="form-group mt-3">
              <label>Senha</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Informe sua senha"
                value={senha}
                onChange={handleSenhaInput}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
