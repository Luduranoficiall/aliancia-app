export const theme = {
  colors: {
    black: "#000000",
    bg: "#050505",
    deepBlack: "#050505",
    card: "rgba(255,215,0,0.10)",
    border: "rgba(255,215,0,0.35)",
    text: "#FFFFFF",
    gold: "#FFD700",
    goldBright: "#E5C100",
    accent: "#00FFAA"
  },
  radius: {
    xl: 26,
    lg: 20
  }
};

// Compatibilidade com imports existentes
export const colors = {
  black: "#000000",
  deepBlack: theme.colors.deepBlack,
  gold: theme.colors.gold,
  goldBright: theme.colors.goldBright,
  white: theme.colors.text,
  card: theme.colors.card,
  border: theme.colors.border
};

export const radius = {
  xl: theme.radius.xl,
  lg: theme.radius.lg
};
