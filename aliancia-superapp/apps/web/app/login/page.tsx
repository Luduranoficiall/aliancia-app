import LogoAliancia from "ui/LogoAliancia";
import { theme } from "ui/theme";

export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: theme.colors.bg,
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.colors.text
      }}
    >
      <LogoAliancia size={120} />

      <h1
        style={{
          marginTop: 24,
          fontSize: 36,
          fontWeight: "bold",
          color: theme.colors.gold
        }}
      >
        Entrar na ALIANCI.A
      </h1>

      <form
        style={{
          marginTop: 40,
          width: "100%",
          maxWidth: 420,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <input
          placeholder="Email"
          type="email"
          style={{
            padding: 18,
            borderRadius: 18,
            marginBottom: 20,
            background: theme.colors.card,
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.text,
            fontSize: 18
          }}
        />

        <input
          placeholder="Senha"
          type="password"
          style={{
            padding: 18,
            borderRadius: 18,
            marginBottom: 20,
            background: theme.colors.card,
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.text,
            fontSize: 18
          }}
        />

        <button
          type="submit"
          style={{
            padding: 20,
            borderRadius: 20,
            background: theme.colors.gold,
            color: theme.colors.black,
            fontWeight: "bold",
            fontSize: 22,
            border: 0
          }}
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
