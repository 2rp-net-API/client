import { Card, CardContent, Typography } from "@mui/material";
import { HoraExtraForm } from "../../components/HoraExtra/HoraExtraForm";
import { HoraExtraList } from "../../components/HoraExtra/HoraExtraList";
import { HorasExtrasPendentes } from "../../components/HoraExtra/HorasExtrasPendentes";

export const HoraExtra = () => {
  return (
    <div>
      <Card sx={{ minWidth: 500, maxWidth: 700 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Cadastrar Nova Hora Extra
          </Typography>
          <HoraExtraForm />
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 500, maxWidth: 700 }} variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Horas Extras Cadastradas
          </Typography>
          <HorasExtrasPendentes />
        </CardContent>
      </Card>
    </div>
  );
};
