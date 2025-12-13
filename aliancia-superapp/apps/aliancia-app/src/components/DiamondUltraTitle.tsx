import { Text } from "react-native";
import { DIAMOND_ULTRA } from "../theme/diamondUltra";

export default function DiamondUltraTitle({ children }) {
  return (
    <Text
      style={{
        color: DIAMOND_ULTRA.diamondBlue,
        fontSize: 36,
        fontWeight: "900",
        textShadowColor: DIAMOND_ULTRA.diamondBlueDeep,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 18,
        transform: [{ perspective: 500 }, { rotateX: "4deg" }]
      }}
    >
      {children}
    </Text>
  );
}
