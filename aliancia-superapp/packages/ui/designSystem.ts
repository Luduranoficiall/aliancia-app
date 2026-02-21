// Design System Unificado: Gold + Diamond Ultra
// Inclui todas as cores, gradientes, radius, shadows, etc.

export const DesignSystem = {
  colors: {
    // Black & backgrounds
    black: "#000000",
    blackDeep: "#050505",
    bg: "#000000",
    bgDeep: "#030303",
    // Gold
    gold: "#F9D948",
    goldBright: "#FFE470",
    goldDark: "#C7A735",
    goldText: "#FFD700",
    goldMetal: "linear-gradient(135deg, #FFD700, #E5C100, #FFEB74, #B8860B)",
    goldMetalV2: "linear-gradient(145deg, #FFD700, #CDAA00, #FFE55C, #B8860B)",
    // Diamond
    diamondBlue: "#8EF3FF",
    diamondBlueDeep: "#35D6E8",
    diamondWhite: "#F2F9FB",
    // Cards & borders
    card: "rgba(255,215,0,0.08)",
    cardV2: "rgba(255,215,0,0.07)",
    border: "rgba(255,215,0,0.35)",
    borderV2: "rgba(255,215,0,0.40)",
    borderUltra: "rgba(142, 243, 255, 0.6)",
    // Text
    text: "#FFFFFF",
    textDim: "#CCCCCC",
    textPrimary: "#FFFFFF",
    textSecondary: "#D1D1D1",
    accent: "#00FFAA",
    shimmer: "rgba(255,255,255,0.35)",
  },
  gradients: {
    gold: ["#F9D948", "#FFE88F"],
    goldMetal: ["#FFD700", "#E5C100", "#FFEB74", "#B8860B"],
    diamond: ["rgba(142, 243, 255, 0.8)", "rgba(0, 180, 200, 0.4)"],
    diamondUltra: ["rgba(142, 243, 255, 0.9)", "rgba(0, 180, 200, 0.4)"],
    goldDiamond: ["#F9D948", "rgba(142, 243, 255, 0.7)"],
    goldUltra: ["#F9D948", "rgba(255, 255, 200, 0.7)"]
  },
  radius: {
    xs: 6,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 28,
    xxl: 48
  },
  shadow: {
    gold: "0px 0px 25px rgba(255,215,0,0.35)",
    soft: "0px 0px 15px rgba(0,0,0,0.35)",
    glow: "#8EF3FF",
    glowSoft: "rgba(142, 243, 255, 0.3)",
    glowStrong: "rgba(142, 243, 255, 0.6)"
  },
  fonts: {
    regular: "System",
    bold: "System"
  },
  // Ultra/diamond extras
  ultra: {
    gradientUltra: ["rgba(142, 243, 255, 0.9)", "rgba(0, 180, 200, 0.4)"],
    glowUltra: {
      shadowColor: "#8EF3FF",
      shadowOpacity: 1,
      shadowRadius: 20
    }
  }
};