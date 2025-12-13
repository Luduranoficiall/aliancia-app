import Screen from "@components/Screen";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Configurações
      </Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Text style={{ color: GOLD.textPrimary }}>Tema: Ouro++</Text>
        <Text style={{ color: GOLD.textPrimary }}>Privacidade</Text>
        <Text style={{ color: GOLD.textPrimary }}>Notificações</Text>
      </View>
    </Screen>
  );
}
