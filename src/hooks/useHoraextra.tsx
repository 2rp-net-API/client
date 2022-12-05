import { useCallback, useState } from "react";
import { horaextra } from "../services/horaextra";
import { HoraExtra } from "../types";

export const useHoraextra = () => {
  const [horasextras, setHorasextras] = useState<HoraExtra[]>();

  const getAll = useCallback(async () => {
    const { status, data } = await horaextra.getAll();
    if (status !== 200) throw new Error();

    setHorasextras(data);
  }, []);

  return {
    horasextras,
    getAll,
  };
};
