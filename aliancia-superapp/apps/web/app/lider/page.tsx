import { theme } from "ui/theme";

export default function PainelLider() {
  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 40 }}>
      <h1 style={{ color: theme.colors.gold, fontSize: 36, fontWeight: "bold" }}>
        Painel do Líder
      </h1>

      <div
        style={{ marginTop: 30, display: "grid", gap: 20, gridTemplateColumns: "repeat(3,1fr)" }}
      >
        <Card label="Equipe Ativa" value="128" />
        <Card label="Novos Hoje" value="17" />
        <Card label="Volume de Rede" value="R$ 32.400" />
      </div>
    </main>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,215,0,0.12)",
        border: "1px solid rgba(255,215,0,0.3)"
      }}
    >
      <p style={{ color: "#AAA" }}>{label}</p>
      <h2 style={{ color: "#FFD700", fontSize: 32 }}>{value}</h2>
    </div>
  );
}
