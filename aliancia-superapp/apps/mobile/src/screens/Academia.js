import { ScrollView, Text, View } from "react-native";
import { theme } from "ui/theme";

export default function Academia() {
  const trilhas = ["Espiritual", "Mental", "Profissional", "Social", "Econômica"];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.bg }}>
      <Text
        style={{
          color: theme.colors.gold,
          fontSize: 32,
          fontWeight: "bold",
          padding: 24
        }}
      >
        Academia ALIANCI.A
      </Text>

      {trilhas.map((t, i) => (
        <View
          key={i}
          style={{
            backgroundColor: theme.colors.card,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: theme.colors.border,
            padding: 20,
            marginHorizontal: 24,
            marginBottom: 20
          }}
        >
          <Text style={{ color: theme.colors.text, fontSize: 22 }}>{t}</Text>
          <Text style={{ color: "#AAA" }}>Aulas, trilhas e replays.</Text>
        </View>
      ))}
    </ScrollView>
  );
}
