export default function Saque() {
  return (
    <main style={{ padding: 40, color: "#FFF", background: "#050505" }}>
      <h1 style={{ fontSize: 34, color: "#FFD700" }}>Solicitar Saque</h1>

      <input placeholder="Valor (R$)" style={input as any} />
      <input placeholder="Chave PIX" style={input as any} />

      <button style={btn as any}>Solicitar</button>
    </main>
  );
}

const input = {
  padding: 18,
  background: "#111",
  borderRadius: 18,
  border: "1px solid #333",
  marginTop: 18,
  color: "#FFF",
  width: "100%"
};

const btn = {
  marginTop: 22,
  padding: 20,
  borderRadius: 18,
  background: "#FFD700",
  color: "#000",
  fontWeight: "bold",
  fontSize: 22,
  border: 0
};
