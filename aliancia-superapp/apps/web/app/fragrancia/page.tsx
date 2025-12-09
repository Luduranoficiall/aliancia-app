import { CardMetal } from "ui/CardMetal";
import { theme } from "ui/theme";

export default function Fragrancia() {
  const produtos = [
    { nome: "Black Gold 01", preco: 199, img: "https://i.imgur.com/9Yj8YpJ.png" },
    { nome: "Royal Intense 02", preco: 229, img: "https://i.imgur.com/fWlA8Rw.png" },
    { nome: "Luxury Oud 03", preco: 249, img: "https://i.imgur.com/2Q4FjzR.png" }
  ];

  return (
    <main style={{ background: "#000", minHeight: "100vh", padding: 48 }}>
      <h1
        style={{
          fontSize: 48,
          backgroundImage: theme.colors.goldMetal,
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        FRAGRANCI.A • Marketplace
      </h1>

      <div
        style={{
          marginTop: 50,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24
        }}
      >
        {produtos.map((p, i) => (
          <CardMetal key={i}>
            <img src={p.img} style={{ width: "100%", borderRadius: 16 }} />
            <h2 style={{ color: "#FFF", marginTop: 14 }}>{p.nome}</h2>
            <p style={{ color: theme.colors.gold, marginTop: 6, fontSize: 22 }}>
              R$ {p.preco}
            </p>

            <button
              style={{
                marginTop: 14,
                width: "100%",
                padding: 16,
                borderRadius: 16,
                backgroundImage: theme.colors.goldMetal,
                border: "none",
                fontSize: 20,
                fontWeight: "bold",
                color: "#000"
              }}
            >
              Comprar
            </button>
          </CardMetal>
        ))}
      </div>
    </main>
  );
}
