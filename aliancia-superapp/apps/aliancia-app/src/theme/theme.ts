
// Design System Unificado ALIANCI.A
export const DESIGN_SYSTEM = {
  colors: {
    black: "#000000",
    blackDeep: "#050505",
    background: "#000000",
    backgroundSecondary: "#0C0C0C",
    gold: "#F9D948",
    goldLight: "#FFE88F",
    goldBright: "#FFE470",
    goldDark: "#C7A735",
    diamondBlue: "#8EF3FF",
    diamondBlueDeep: "#35D6E8",
    diamondWhite: "#F2F9FB",
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D1D1",
    border: "#2A2A2A",
    borderUltra: "rgba(142, 243, 255, 0.6)",
    shimmer: "rgba(255,255,255,0.35)"
  },
  gradients: {
    diamond: ["rgba(142, 243, 255, 0.8)", "rgba(0, 180, 200, 0.4)"],
    goldDiamond: ["#F9D948", "rgba(142, 243, 255, 0.7)"],
    ultra: ["rgba(142, 243, 255, 0.9)", "rgba(0, 180, 200, 0.4)"],
    goldUltra: ["#F9D948", "rgba(255, 255, 200, 0.7)"]
  },
  glow: {
    soft: "rgba(142, 243, 255, 0.3)",
    strong: "rgba(142, 243, 255, 0.6)",
    ultra: {
      shadowColor: "#8EF3FF",
      shadowOpacity: 1,
      shadowRadius: 20
    }
  },
  sizes: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 22,
    xl: 32,
    xxl: 48
  },
  fonts: {
    regular: "System",
    bold: "System"
  }
};

// Estilos globais
export const GLOBAL_STYLES = {
  text: {
    color: DESIGN_SYSTEM.colors.textPrimary,
    fontSize: 16
  }
};
