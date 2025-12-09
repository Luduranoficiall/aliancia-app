import { theme } from "ui/theme";

export default function Fragrancia() {
  const produtos = [
    { nome: "Perfume A", preco: 129 },
    { nome: "Perfume B", preco: 149 },
    { nome: "Perfume C", preco: 199 }
  ];

  return (
    <main style={{ background: theme.colors.bg, padding: 40, minHeight: "100vh" }}>
      <h1 style={{ fontSize: 36, color: theme.colors.gold, fontWeight: "bold" }}>
        FRAGRANCI.A
      </h1>

      <div
        style={{ marginTop: 32, display: "grid", gap: 20, gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {produtos.map((p, i) => (
          <div
            key={i}
            style={{
              padding: 24,
              background: theme.colors.card,
              borderRadius: 20,
              border: `1px solid ${theme.colors.border}`
            }}
          >
            <h2 style={{ fontSize: 24 }}>{p.nome}</h2>
            <p style={{ opacity: 0.6 }}>R$ {p.preco}</p>
            <button
              style={{
                marginTop: 12,
                padding: 14,
                border: 0,
                borderRadius: 18,
                background: theme.colors.gold,
                color: theme.colors.black,
                fontWeight: "bold"
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
