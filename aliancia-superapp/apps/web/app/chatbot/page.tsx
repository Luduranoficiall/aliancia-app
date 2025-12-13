import { useChatbot } from "../../../src/ai";
import { theme } from "ui/theme";
import { useState } from "react";

export default function ChatbotPage() {
  const { sendMessage, messages } = useChatbot();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Chatbot IA</h1>
      <div style={{ marginTop: 32, maxWidth: 600 }}>
        <div style={{ minHeight: 200, background: theme.colors.card, borderRadius: 12, padding: 18, marginBottom: 18 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ marginBottom: 10, color: m.role === "user" ? theme.colors.gold : theme.colors.text }}>
              <b>{m.role === "user" ? "Você" : "IA"}:</b> {m.content}
            </div>
          ))}
        </div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          style={{ padding: 12, borderRadius: 8, border: `1px solid ${theme.colors.border}`, width: 400 }}
        />
        <button onClick={handleSend} style={{ marginLeft: 12, padding: 12, borderRadius: 8, background: theme.colors.gold, color: "#000", fontWeight: 700 }}>
          Enviar
        </button>
      </div>
    </main>
  );
}
