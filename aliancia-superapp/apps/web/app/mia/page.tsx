"use client";
"use client";
import { useState } from "react";
import { theme } from "ui/theme";

type Msg = { from: "user" | "mia"; text: string };

export default function Mia() {
  const [chat, setChat] = useState<Msg[]>([]);
  const [msg, setMsg] = useState("");

  async function send() {
    if (!msg) return;
    setChat((prev) => [...prev, { from: "user", text: msg }]);

    const res = await fetch("/api/mia", { method: "POST", body: msg });
    const reader = res.body?.getReader();
    if (!reader) return;

    let full = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = new TextDecoder().decode(value);
      full += chunk;
      setChat((prev) => {
        const withoutLastMia = prev.filter((_, idx) => idx !== prev.length - 1 || prev[idx].from !== "mia");
        return [...withoutLastMia, { from: "mia", text: full }];
      });
    }
    setMsg("");
  }

  return (
    <main
      style={{
        padding: 40,
        background: theme.colors.bgDeep,
        minHeight: "100vh"
      }}
    >
      <h1 style={{ color: theme.colors.gold, fontSize: 42 }}>MI.A — Inteligência Avançada</h1>

      <textarea
        style={{
          marginTop: 30,
          width: "100%",
          height: 120,
          borderRadius: 20,
          padding: 16,
          background: "#222",
          color: "#fff"
        }}
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button
        onClick={send}
        style={{
          padding: 20,
          borderRadius: 20,
          backgroundImage: theme.colors.goldMetal,
          color: "#000",
          fontSize: 24,
          marginTop: 14
        }}
      >
        ENVIAR
      </button>

      <div style={{ marginTop: 40 }}>
        {chat.map((m, i) => (
          <p
            key={i}
            style={{
              background: m.from === "mia" ? "#FFD70022" : "#111",
              padding: 16,
              borderRadius: 16,
              marginBottom: 12,
              color: "#fff"
            }}
          >
            {m.text}
          </p>
        ))}
      </div>
    </main>
  );
}
