import { Card } from "ui/Card";
import { colors, radius } from "ui/theme";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: colors.deepBlack,
        color: colors.white,
        padding: "32px"
      }}
    >
      <h1
        style={{
          fontSize: 42,
          fontWeight: "bold",
          background: `linear-gradient(90deg, ${colors.gold}, ${colors.goldBright})`,
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        MI.A • Painel de Prosperidade
      </h1>

      <div
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24
        }}
      >
        <Card>
          <p style={{ color: colors.gold, fontSize: 14 }}>Saldo Disponível</p>
          <h2 style={{ fontSize: 38, fontWeight: "bold", marginTop: 6 }}>
            R$ 3.200,00
          </h2>
        </Card>

        <Card>
          <p style={{ color: "#00FFAA", fontSize: 14 }}>Comissões</p>
          <h2 style={{ fontSize: 38, fontWeight: "bold", marginTop: 6 }}>
            R$ 1.740,00
          </h2>
        </Card>
      </div>

      <button
        style={{
          marginTop: 36,
          width: "100%",
          padding: "18px 0",
          backgroundColor: colors.gold,
          color: colors.black,
          borderRadius: radius.xl,
          fontSize: 24,
          fontWeight: "bold",
          border: "none"
        }}
      >
        INDICAR AGORA
      </button>
    </main>
  );
}
