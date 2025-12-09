import ButtonGold from "ui/ButtonGold";
import { CardMetal } from "ui/CardMetal";
import { theme } from "ui/theme";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: theme.colors.bgDeep,
        padding: 40,
        color: theme.colors.text
      }}
    >
      <h1
        style={{
          fontSize: 48,
          fontWeight: "bold",
          backgroundImage: theme.colors.goldMetal,
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        ALIANCI.A • Painel
      </h1>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24
        }}
      >
        <CardMetal>
          <h3 style={{ color: theme.colors.gold }}>Saldo</h3>
          <p style={{ fontSize: 38 }}>R$ 3.200,00</p>
        </CardMetal>

        <CardMetal>
          <h3 style={{ color: theme.colors.accent }}>Comissões</h3>
          <p style={{ fontSize: 38 }}>R$ 1.740,00</p>
        </CardMetal>
      </div>

      <ButtonGold style={{ marginTop: 50, width: "100%" }}>INDICAR AGORA</ButtonGold>
    </main>
  );
}
