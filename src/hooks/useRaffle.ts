import { getWinners } from "@/utils/raffle";
import { useEffect, useState } from "react";

export function useRaffle() {
  const [winners, setWinners] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const namesParam = params.get("names");
    if (!namesParam) return;

    const names = namesParam.split(",");
    const winners = getWinners(names);

    setWinners(winners);
  }, []);

  return { winners };
}
