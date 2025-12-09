import LogoAliancia from "ui/LogoAliancia";
import { theme } from "ui/theme";

export default function Beneficios() {
  return (
    <main
      style={{
        background: theme.colors.bg,
        minHeight: "100vh",
        padding: 32,
        color: theme.colors.text
      }}
    >
      <LogoAliancia size={80} />

      <h1
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: theme.colors.gold,
          marginTop: 24
        }}
      >
        Benefícios Exclusivos
      </h1>

      <div style={{ marginTop: 32 }}>
        {["SulAmérica Seguro", "Banco Parceiro", "FRAGRANCI.A", "Viagens", "Energia"].map(
          (b) => (
            <div
              key={b}
              style={{
                padding: 20,
                background: theme.colors.card,
                borderRadius: theme.radius.xl,
                border: `1px solid ${theme.colors.border}`,
                marginBottom: 20
              }}
            >
              <h2 style={{ fontSize: 22, fontWeight: "bold" }}>{b}</h2>
              <p style={{ opacity: 0.7 }}>Aproveite vantagens exclusivas.</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
