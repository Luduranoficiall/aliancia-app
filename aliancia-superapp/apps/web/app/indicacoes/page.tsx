import { theme } from "ui/theme";
import { IndicationTree } from "ui/Tree";
import TreeCanvas from "./TreeCanvas";

export default function Indicacoes() {
  const nodes = [
    { name: "Lucas", x: 200, y: 200 },
    { name: "Mariana", x: 400, y: 260 },
    { name: "João", x: 600, y: 320 },
    { name: "Fernanda", x: 800, y: 180 }
  ];

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Sua Rede</h1>

      <IndicationTree
        nodes={[
          { name: "Lucas", level: 1 },
          { name: "Mariana", level: 1 },
          { name: "João", level: 2 },
          { name: "Fernanda", level: 3 }
        ]}
      />

      <div style={{ marginTop: 32 }}>
        <TreeCanvas nodes={nodes} />
      </div>
    </main>
  );
}
