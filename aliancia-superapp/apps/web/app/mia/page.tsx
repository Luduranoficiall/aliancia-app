"use client";
"use client";
import { useState } from "react";
import { theme } from "ui/theme";

export default function MiaChat() {
  const [chat, setChat] = useState<{ from: "user" | "mia"; text: string }[]>([]);
  const [msg, setMsg] = useState("");

  async function send() {
    const res = await fetch("/api/mia", {
      method: "POST",
      body: msg
    }).then((r) => r.text());

    setChat([...chat, { from: "user", text: msg }, { from: "mia", text: res }]);
    setMsg("");
  }

  return (
    <main
      style={{
        background: theme.colors.bg,
        minHeight: "100vh",
        padding: 24,
        color: theme.colors.text
      }}
    >
      <h1 style={{ color: theme.colors.gold, fontSize: 36 }}>MI.A — IA</h1>

      <div style={{ marginTop: 24, height: "70vh", overflowY: "auto" }}>
        {chat.map((m, i) => (
          <div
            key={i}
            style={{
              marginBottom: 14,
              padding: 14,
              borderRadius: 18,
              background: m.from === "user" ? "#FFD70022" : "#FFFFFF22",
              alignSelf: m.from === "user" ? "flex-end" : "flex-start",
              maxWidth: "80%"
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Fale com a MI.A"
        style={{
          marginTop: 20,
          width: "100%",
          height: 100,
          background: "#222",
          color: theme.colors.text,
          borderRadius: 18,
          padding: 14,
          border: "1px solid #333"
        }}
      ></textarea>

      <button
        onClick={send}
        style={{
          marginTop: 14,
          width: "100%",
          padding: 20,
          background: theme.colors.gold,
          borderRadius: 20,
          color: theme.colors.black,
          fontSize: 22,
          fontWeight: "bold",
          border: 0
        }}
      >
        Enviar
      </button>
    </main>
  );
}
