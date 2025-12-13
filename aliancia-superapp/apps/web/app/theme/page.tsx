import { useDarkUltra } from "../../../src/theme/dynamic";
import { theme } from "ui/theme";

export default function ThemePage() {
  const darkUltra = useDarkUltra();

  return (
    <main style={{ background: darkUltra.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: darkUltra.gold }}>Tema Dinâmico: Dark Ultra</h1>
      <div style={{ marginTop: 32 }}>
        <div style={{ background: darkUltra.card, padding: 24, borderRadius: 12, color: darkUltra.text }}>
          <b>Exemplo de Card Premium</b>
          <p>Este é um card com o tema Dark Ultra aplicado.</p>
        </div>
      </div>
    </main>
  );
}
