import { View, Text, ScrollView } from "react-native";
import { theme } from "ui/theme";

export default function Home(): JSX.Element {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.bgDeep }}
      contentContainerStyle={{ padding: 28 }}
    >
      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          backgroundColor: theme.colors.goldMetal,
          color: "transparent"
        }}
      >
        ALIANCI.A
      </Text>
      <View
        style={{
          marginTop: 30,
          padding: 24,
          backgroundColor: theme.colors.card,
          borderRadius: theme.radius.xl,
          borderColor: theme.colors.border,
          borderWidth: 1
        }}
      >
        <Text style={{ color: theme.colors.gold }}>Saldo</Text>
        <Text style={{ color: "#FFF", fontSize: 38 }}>R$ 3.200,00</Text>
      </View>
      <View
        style={{
          marginTop: 20,
          padding: 24,
          backgroundColor: theme.colors.card,
          borderRadius: theme.radius.xl,
          borderColor: theme.colors.border,
          borderWidth: 1
        }}
      >
        <Text style={{ color: theme.colors.accent }}>Comissões</Text>
        <Text style={{ color: "#FFF", fontSize: 38 }}>R$ 1.740,00</Text>
      </View>
    </ScrollView>
  );
}
