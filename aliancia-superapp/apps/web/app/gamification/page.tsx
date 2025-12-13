import { useGamification } from "../../../src/gamification";
import { theme } from "ui/theme";

export default function GamificationPage() {
  const { points, medals } = useGamification();

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Gamificação</h1>
      <div style={{ marginTop: 32 }}>
        <div style={{ fontSize: 22, color: theme.colors.accent }}>Pontos: {points}</div>
        <div style={{ marginTop: 18 }}>
          <b>Medalhas:</b>
          <ul>
            {medals.length === 0 && <li>Nenhuma medalha ainda.</li>}
            {medals.map((m, i) => (
              <li key={i} style={{ color: theme.colors.gold }}>{m}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
