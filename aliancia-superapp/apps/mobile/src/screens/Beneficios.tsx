import { View, Text, ScrollView } from "react-native";
import { theme } from "ui/theme";

export default function Beneficios(): JSX.Element {
  const items: string[] = [
    "Seguro SulAmérica",
    "Banco Parceiro",
    "FRAGRANCI.A",
    "Energia Inteligente",
    "Viagens VIP"
  ];

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
        Benefícios
      </Text>
      {items.map((item, i) => (
        <View
          key={i}
          style={{
            marginHorizontal: 24,
            marginBottom: 20,
            padding: 20,
            backgroundColor: theme.colors.card,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: theme.colors.border
          }}
        >
          <Text style={{ color: theme.colors.text, fontSize: 22 }}>{item}</Text>
          <Text style={{ color: "#AAA", marginTop: 4 }}>
            Condições exclusivas para membros ALIANCI.A
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
