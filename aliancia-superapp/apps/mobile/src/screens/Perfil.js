import { ScrollView, Text, View } from "react-native";
import { theme } from "ui/theme";

export default function Perfil() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Text
        style={{
          color: theme.colors.gold,
          fontSize: 32,
          padding: 24,
          fontWeight: "bold"
        }}
      >
        Seu Perfil
      </Text>

      <View
        style={{
          backgroundColor: theme.colors.card,
          borderRadius: 22,
          borderWidth: 1,
          borderColor: theme.colors.border,
          padding: 24,
          marginHorizontal: 24
        }}
      >
        <Text style={{ color: theme.colors.text, fontSize: 20 }}>Saldo</Text>
        <Text style={{ color: theme.colors.gold, fontSize: 32, fontWeight: "bold" }}>
          R$ 3.200,00
        </Text>

        <Text style={{ color: theme.colors.text, fontSize: 20, marginTop: 20 }}>
          Cashback
        </Text>
        <Text style={{ color: "#00FFAA", fontSize: 32, fontWeight: "bold" }}>
          R$ 740,00
        </Text>

        <Text style={{ color: theme.colors.text, fontSize: 20, marginTop: 20 }}>
          Ecodólar
        </Text>
        <Text style={{ color: theme.colors.goldBright, fontSize: 32, fontWeight: "bold" }}>
          180 EC$
        </Text>
      </View>
    </ScrollView>
  );
}
