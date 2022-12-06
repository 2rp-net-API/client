import { useEffect, useState } from "react";
import { Api } from "../../providers";

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const HorasExtrasPendentes = () => {
  const [horasextras, setHorasextras] = useState([]);

  const approveHoraextra = (idhoraextra) => () => {
    Api.put("http://localhost:3001/horaextra/approve", { body: idhoraextra });
  };

  const columns = [
    { headerName: "id", field: "idhoraextra", width: 20 },
    {
      headerName: "Colaborador",
      field: "colaborador",
      width: 250,
      valueGetter: (params) => `${params.row.colaborador.nome}`,
    },
    {
      headerName: "Entrada",
      field: "entrada",
      width: 250,
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
    },
    {
      headerName: "Saída",
      field: "saida",
      width: 250,
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
    },
    { headerName: "Descrição", field: "description", width: 200 },
    { headerName: "Status", field: "isApproved", width: 100, type: "boolean" },
    {
      field: "actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<CheckCircleIcon />}
          onClick={approveHoraextra(params.id)}
          label="Approve"
        />,
      ],
    },
  ];

  useEffect(() => {
    Api.get("http://localhost:3001/horaextra/list")
      .then((res) => res.data)
      .then((res) => {
        setHorasextras(res);
        console.log(horasextras);
      });
  }, []);

  return (
    <div>
      {!horasextras ? (
        "Nenhuma hora extra cadastrada"
      ) : (
        <DataGrid
          rows={horasextras}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          getRowId={(row) => row.idhoraextra}
          autoHeight
        />
      )}
    </div>
  );
};
