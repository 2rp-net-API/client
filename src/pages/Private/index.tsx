import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Private = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h2>Private</h2>
      <h3>Hello {auth.colaborador?.nome}</h3>
    </div>
  );
};
