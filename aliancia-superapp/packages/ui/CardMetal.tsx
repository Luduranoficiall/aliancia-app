import type { CSSProperties, ReactNode } from "react";
import { theme } from "./theme";

export function CardMetal({
  children,
  style = {}
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        padding: 24,
        background: theme.colors.card,
        borderRadius: theme.radius.xl,
        border: `1px solid ${theme.colors.border}`,
        boxShadow: theme.shadow.soft,
        backdropFilter: "blur(6px)",
        ...style
      }}
    >
      {children}
    </div>
  );
}
