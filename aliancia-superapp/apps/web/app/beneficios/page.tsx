import { CardMetal } from "ui/CardMetal";
import { theme } from "ui/theme";

export default function Beneficios() {
  const list = [
    { titulo: "Seguro SulAmérica", desc: "Coberturas exclusivas" },
    { titulo: "Banco Parceiro", desc: "Conta, crédito e cashback" },
    { titulo: "FRAGRANCI.A", desc: "Perfumes premium" }
  ];

  return (
    <main style={{ background: theme.colors.bgDeep, padding: 48, minHeight: "100vh" }}>
      <h1
        style={{
          fontSize: 48,
          backgroundImage: theme.colors.goldMetal,
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        Benefícios Exclusivos
      </h1>

      <div style={{ marginTop: 40, display: "grid", gap: 24 }}>
        {list.map((b, i) => (
          <CardMetal key={i}>
            <h2 style={{ color: theme.colors.gold }}>{b.titulo}</h2>
            <p style={{ color: theme.colors.textDim, marginTop: 10 }}>{b.desc}</p>
          </CardMetal>
        ))}
      </div>
    </main>
  );
}
