export function calcularBeneficioIndicaI(anosAtivo: number) {
  const percentual = Math.min(anosAtivo * 0.01, 0.05);
  return {
    percentual,
    descricao: `Benefício de ${(percentual * 100).toFixed(0)}% baseado em ${anosAtivo} ano(s) ativo.`
  };
}
