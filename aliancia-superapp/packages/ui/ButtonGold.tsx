import type { ReactNode, CSSProperties } from "react";
import { theme } from "./theme";

const pulse = {
  animation: "pulse 2.2s infinite"
} as const;

export default function ButtonGold({
  children,
  onClick,
  style = {}
}: {
  children: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundImage: theme.colors.goldMetal,
        padding: "20px 36px",
        borderRadius: 30,
        color: "#000",
        fontWeight: "bold",
        fontSize: 24,
        border: "none",
        ...pulse,
        ...style
      }}
    >
      {children}
    </button>
  );
}
