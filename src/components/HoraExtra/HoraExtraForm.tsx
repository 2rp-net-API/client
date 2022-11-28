import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Button } from "@mui/material";

import { Colaborador } from "../../types";

import jwt_decode from "jwt-decode";

export const HoraExtraForm = () => {
  const token: string = localStorage.getItem("authToken")!;
  const decoded: Colaborador = jwt_decode(token)!;

  const [entrada, setEntrada] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [saida, setSaida] = React.useState<Dayjs | null>(dayjs(new Date()));

  return (
    <form>
      <h2> Olá {decoded.nome}</h2>
      <TextField
        size="small"
        id="outlined-basic"
        label="ID Colaborador"
        variant="outlined"
        defaultValue={decoded.id}
      />
      <TextField
        size="small"
        id="outlined-basic"
        label="Descrição"
        variant="outlined"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Entrada"
          value={entrada}
          onChange={(newValue) => {
            setEntrada(newValue);
          }}
        />
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Saída"
          value={saida}
          onChange={(newValue) => {
            setSaida(newValue);
          }}
        />
      </LocalizationProvider>
      <Button size="large" variant="outlined">
        Cadastrar Hora Extra
      </Button>
    </form>
  );
};
