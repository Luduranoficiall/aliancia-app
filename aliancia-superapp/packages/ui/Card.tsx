import type { ReactNode } from "react";
import { colors, radius } from "./theme";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: colors.card,
        borderRadius: radius.xl,
        border: `1px solid ${colors.border}`,
        padding: 24
      }}
    >
      {children}
    </div>
  );
}
