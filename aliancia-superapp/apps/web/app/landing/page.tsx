import LogoAliancia from "ui/LogoAliancia";

export default function Landing() {
  return (
    <main
      style={{
        background: "#000",
        minHeight: "100vh",
        padding: "80px 40px",
        color: "#FFF"
      }}
    >
      <LogoAliancia size={140} />

      <h1
        style={{
          marginTop: 40,
          fontSize: 60,
          fontWeight: "bold",
          background: "linear-gradient(90deg, #FFD700, #B8860B)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        ALIANCI.A
      </h1>

      <p style={{ maxWidth: 520, fontSize: 22, opacity: 0.75, marginTop: 20 }}>
        O Superapp que une Prosperidade, Inteligência Artificial e a maior
        comunidade de evolução pessoal e financeira do Brasil.
      </p>

      <button
        style={{
          marginTop: 40,
          padding: "18px 40px",
          borderRadius: 24,
          background: "linear-gradient(145deg, #FFD700, #E5C100, #FFEA70)",
          color: "#000",
          fontSize: 24,
          fontWeight: "bold",
          border: "none"
        }}
      >
        Baixar App
      </button>
    </main>
  );
}
