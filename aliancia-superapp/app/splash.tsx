import { Text, View } from "react-native";
import Screen from "@components/Screen";
import { GOLD } from "@theme/gold";

export default function Splash() {
  return (
    <Screen>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: GOLD.gold, fontSize: 40, fontWeight: "bold" }}>
          ALIANCI.A
        </Text>
        <Text style={{ color: GOLD.textSecondary, marginTop: 8 }}>
          Premium Master Ouro++
        </Text>
      </View>
    </Screen>
  );
}
