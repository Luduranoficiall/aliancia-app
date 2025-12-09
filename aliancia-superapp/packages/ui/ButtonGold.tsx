import type { ReactNode, CSSProperties } from "react";
import { theme } from "./theme";

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
        padding: "18px 32px",
        borderRadius: theme.radius.xl,
        border: "none",
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        boxShadow: theme.shadow.gold,
        ...style
      }}
    >
      {children}
    </button>
  );
}
