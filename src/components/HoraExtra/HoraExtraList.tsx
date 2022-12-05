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

  const data = useMemo(() => props.data, [props.data]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table>
      <thead>
        {headerGroups.map((headerGroup) => {
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              <th {...column.getHeaderProps()} scope="col">
                {column.render("Header")}
              </th>;
            })}
          </tr>;
        })}
      </thead>
      <tbody {...getTableBodyProps}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
