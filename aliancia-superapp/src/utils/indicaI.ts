import { IndicaIResult } from "../types/IndicaI";

export function calcularBeneficioIndicaI(anosAtivo: number): IndicaIResult {
  const percentual = Math.min(anosAtivo * 0.01, 0.10);

  return {
    percentual,
    descricao: `Benefício de ${(percentual * 100).toFixed(0)}% no nível Diamond Ultra`
  };
}
