import { View } from "react-native";
import { DIAMOND, COLORS } from "../theme/theme";

export default function DiamondCard({ children, height = 150 }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.backgroundSecondary,
        borderRadius: 16,
        padding: 20,
        height,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: DIAMOND.glow,
        shadowColor: DIAMOND.glow,
        shadowOpacity: 0.7,
        shadowRadius: 10
      }}
    >
      {children}
    </View>
  );
}
