import { useEffect, useState, useMemo } from "react";
import { Api } from "../../providers";

import { useTable } from "react-table";

import { HoraExtra } from "../../types";

type Props = { data: HoraExtra[] };
const columns = [
  {
    Header: "idhoraextra",
    accessor: "idhoraextra",
  },
  {
    Header: "Entrada",
    accessor: "entrada",
  },
  {
    Header: "Saida",
    accessor: "saida",
  },
  {
    Header: "Descricao",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "isApproved",
  },
  {
    Header: "Colaborador",
    accessor: "colaborador.nome",
  },
];

export const HoraExtraList = (props: Props) => {
  const [horasextras, setHorasextras] = useState<HoraExtra>();

  useEffect(() => {
    Api.get("http://localhost:3001/horaextra/list").then((res) => {
      setHorasextras(res.data);
    });
  }, []);

  return <table></table>;
};
