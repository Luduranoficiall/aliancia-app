import { View, Text } from "react-native";
import Screen from "../src/components/Screen";
import { COLORS } from "../src/theme/theme";

export default function Splash() {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          color: COLORS.gold,
          fontSize: 42,
          fontWeight: "bold",
        }}>
          ALIANCI.A
        </Text>

        <Text style={{
          color: COLORS.textSecondary,
          fontSize: 18,
          marginTop: 10
        }}>
          Premium Master Ouro++
        </Text>
      </View>
    </Screen>
  );
}
