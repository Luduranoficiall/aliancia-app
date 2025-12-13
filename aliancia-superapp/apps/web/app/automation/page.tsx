import { useAutomation } from "../../../src/automation";
import { theme } from "ui/theme";
import { useState } from "react";

export default function AutomationPage() {
  const { run } = useAutomation();
  const [task, setTask] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    if (!task) return;
    setResult("Executando...");
    const r = await run(task);
    setResult(r);
  };

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Automação</h1>
      <div style={{ marginTop: 32, maxWidth: 600 }}>
        <input
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Descreva a tarefa..."
          style={{ padding: 12, borderRadius: 8, border: `1px solid ${theme.colors.border}`, width: 400 }}
        />
        <button onClick={handleRun} style={{ marginLeft: 12, padding: 12, borderRadius: 8, background: theme.colors.gold, color: "#000", fontWeight: 700 }}>
          Executar
        </button>
        <div style={{ marginTop: 24, color: theme.colors.accent }}>{result}</div>
      </div>
    </main>
  );
}
