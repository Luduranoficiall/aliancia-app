import { theme } from "ui/theme";

export default function Perfil() {
  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ color: theme.colors.gold, fontSize: 34 }}>Seu Perfil</h1>

      <div
        style={{
          background: theme.colors.card,
          borderRadius: 24,
          padding: 24,
          marginTop: 24,
          border: `1px solid ${theme.colors.border}`
        }}
      >
        <h2 style={{ fontSize: 24 }}>Saldo</h2>
        <p style={{ fontSize: 32 }}>R$ 3.200,00</p>

        <h2 style={{ fontSize: 24, marginTop: 20 }}>Cashback</h2>
        <p style={{ fontSize: 32 }}>R$ 740,00</p>

        <h2 style={{ fontSize: 24, marginTop: 20 }}>Ecodólar</h2>
        <p style={{ fontSize: 32 }}>180 EC$</p>
      </div>
    </main>
  );
}
