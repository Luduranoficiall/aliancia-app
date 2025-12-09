import { theme } from "ui/theme";

export default function Academia() {
  const trilhas = ["Espiritual", "Mental", "Profissional", "Social", "Econômica"];

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 36, color: theme.colors.gold }}>Academia ALIANCI.A</h1>

      <div style={{ marginTop: 32 }}>
        {trilhas.map((t) => (
          <div
            key={t}
            style={{
              padding: 20,
              borderRadius: 22,
              background: theme.colors.card,
              marginBottom: 20,
              border: `1px solid ${theme.colors.border}`
            }}
          >
            <h2 style={{ fontSize: 24 }}>{t}</h2>
            <p style={{ opacity: 0.7 }}>Aulas, replays, conteúdos premium.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
