import { Text } from "react-native";
import { DIAMOND } from "../theme/diamond";

export default function DiamondTitle({ children }) {
  return (
    <Text
      style={{
        color: DIAMOND.diamondWhite,
        fontSize: 30,
        fontWeight: "900",
        textShadowColor: DIAMOND.glow,
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12
      }}
    >
      {children}
    </Text>
  );
}
