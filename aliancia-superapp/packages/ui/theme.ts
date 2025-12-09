export const theme = {
  colors: {
    bg: "#000000",
    bgDeep: "#030303",
    gold: "#FFD700",
    goldText: "#FFD700",
    goldMetal: "linear-gradient(135deg, #FFD700, #E5C100, #FFEB74, #B8860B)",
    card: "rgba(255,215,0,0.08)",
    border: "rgba(255,215,0,0.35)",
    text: "#FFFFFF",
    textDim: "#CCCCCC",
    accent: "#00FFAA"
  },
  radius: {
    xl: 28,
    lg: 20,
    md: 14
  },
  shadow: {
    gold: "0px 0px 25px rgba(255,215,0,0.35)",
    soft: "0px 0px 15px rgba(0,0,0,0.35)"
  }
};

// Compatibilidade com imports existentes
export const colors = {
  black: "#000000",
  deepBlack: theme.colors.bgDeep,
  gold: theme.colors.gold,
  goldBright: theme.colors.gold,
  white: theme.colors.text,
  card: theme.colors.card,
  border: theme.colors.border
};

export const radius = {
  xl: theme.radius.xl,
  lg: theme.radius.lg
};
