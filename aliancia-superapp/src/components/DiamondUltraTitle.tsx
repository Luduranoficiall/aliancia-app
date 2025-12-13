import { ReactNode } from "react";
import { Text } from "react-native";
import { DIAMOND_ULTRA } from "@theme/diamondUltra";

interface Props {
  children: ReactNode;
}

export default function DiamondUltraTitle({ children }: Props) {
  return (
    <Text
      style={{
        color: DIAMOND_ULTRA.diamondBlue,
        fontSize: 36,
        fontWeight: "900",
        textShadowColor: DIAMOND_ULTRA.diamondBlueDeep,
        textShadowRadius: 18
      }}
    >
      {children}
    </Text>
  );
}
