"use client";
import { useEffect, useState } from "react";
import { theme } from "ui/theme";

export default function AdminDashboard() {
  const [overview, setOverview] = useState<null | {
    totalMembros: number;
    faturamento: number;
    comissoesPendentes: number;
  }>(null);

  useEffect(() => {
    fetch("/api/admin/overview")
      .then((r) => r.json())
      .then(setOverview)
      .catch(() => setOverview(null));
  }, []);

  return (
    <main
      style={{
        background: theme.colors.bg,
        minHeight: "100vh",
        padding: 40,
        color: theme.colors.text
      }}
    >
      <h1
        style={{
          fontSize: 42,
          color: theme.colors.gold,
          fontWeight: "bold",
          marginBottom: 30
        }}
      >
        Painel Administrativo
      </h1>

      {!overview && <p>Carregando...</p>}

      {overview && (
        <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(3,1fr)" }}>
          <Card value={overview.totalMembros} label="Membros Ativos" />
          <Card value={`R$ ${overview.faturamento}`} label="Faturamento Total" />
          <Card value={`R$ ${overview.comissoesPendentes}`} label="Comissões Pendentes" />
        </div>
      )}
    </main>
  );
}

function Card({ value, label }: { value: string | number; label: string }) {
  return (
    <div
      style={{
        padding: 24,
        background: "rgba(255,215,0,0.10)",
        borderRadius: 22,
        border: "1px solid rgba(255,215,0,0.35)"
      }}
    >
      <p style={{ color: "#AAA" }}>{label}</p>
      <h2 style={{ color: "#FFD700", fontSize: 32, fontWeight: "bold" }}>{value}</h2>
    </div>
  );
}
