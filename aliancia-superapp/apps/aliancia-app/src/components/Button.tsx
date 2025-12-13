import { TouchableOpacity, Text } from "react-native";
import { COLORS, SIZES } from "../theme/theme";

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLORS.gold,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginVertical: 10
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: COLORS.background }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
