import { useEffect, useState } from "react";
import { Api } from "../../providers";

export const HorasExtrasPendentes = () => {
  const [horasextras, setHorasextras] = useState();

  useEffect(() => {
    Api.get("http://localhost:3001/horaextra/list").then((res) => {
      setHorasextras(res.data);
    });
  }, []);

  return (
    <div>
      {!horasextras ? (
        "Nenhuma hora extra cadastrada"
      ) : (
        <table>
          <thead>
            <tr>Entrada</tr>
          </thead>
          <tbody>
            {horasextras.map((horaextra, index) => {
              <tr key={index}>
                <td>{horaextra.entrada}</td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
