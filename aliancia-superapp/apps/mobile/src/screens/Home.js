import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { theme } from "ui/theme";

export default function Home() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.deepBlack }}
      contentContainerStyle={{ padding: 24 }}
    >
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          backgroundColor: "transparent",
          color: theme.colors.gold,
          marginBottom: 24
        }}
      >
        MI.A — Prosperidade
      </Text>

      <View
        style={{
          backgroundColor: theme.colors.card,
          borderRadius: 22,
          borderWidth: 1,
          borderColor: theme.colors.border,
          padding: 24,
          marginBottom: 24
        }}
      >
        <Text style={{ color: theme.colors.gold, fontSize: 16 }}>Saldo</Text>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 6
          }}
        >
          R$ 3.200,00
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(0,255,170,0.15)",
          borderRadius: 22,
          borderWidth: 1,
          borderColor: "#00FFAA",
          padding: 24,
          marginBottom: 32
        }}
      >
        <Text style={{ color: "#00FFAA", fontSize: 16 }}>Comissões</Text>
        <Text
          style={{
            color: theme.colors.text,
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 6
          }}
        >
          R$ 1.740,00
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.gold,
          paddingVertical: 22,
          borderRadius: 22
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
            color: theme.colors.black
          }}
        >
          INDICAR AGORA
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
