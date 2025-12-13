import { View } from "react-native";
import { COLORS } from "../theme/theme";

export default function Card({ children, height = 120 }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.backgroundSecondary,
        borderWidth: 1,
        borderColor: COLORS.goldDark,
        borderRadius: 14,
        padding: 16,
        height,
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
}
