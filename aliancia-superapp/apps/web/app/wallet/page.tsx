import { usePix } from "../../../src/finance";
import { theme } from "ui/theme";
import { useState } from "react";

export default function WalletPage() {
  const { send } = usePix();
  const [to, setTo] = useState("");
  const [value, setValue] = useState(0);
  const [msg, setMsg] = useState("");

  const handleSend = async () => {
    try {
      await send(to, value);
      setMsg("Pix enviado com sucesso!");
    } catch {
      setMsg("Erro ao enviar Pix.");
    }
  };

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Carteira Digital</h1>
      <div style={{ marginTop: 32 }}>
        <input
          placeholder="Chave Pix"
          value={to}
          onChange={e => setTo(e.target.value)}
          style={{ padding: 12, borderRadius: 8, border: `1px solid ${theme.colors.border}`, marginRight: 12 }}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
          style={{ padding: 12, borderRadius: 8, border: `1px solid ${theme.colors.border}` }}
        />
        <button onClick={handleSend} style={{ marginLeft: 16, padding: 12, borderRadius: 8, background: theme.colors.gold, color: "#000", fontWeight: 700 }}>
          Enviar Pix
        </button>
        {msg && <div style={{ marginTop: 18, color: theme.colors.accent }}>{msg}</div>}
      </div>
    </main>
  );
}
