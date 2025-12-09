import { View, Text } from "react-native";
import { theme } from "ui/theme";

export default function Medalhas() {
  const medals = [
    { name: "Iniciador", icon: "⭐" },
    { name: "Líder", icon: "👑" },
    { name: "Top 1%", icon: "🔥" }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg, padding: 24 }}>
      <Text style={{ color: theme.colors.gold, fontSize: 32, fontWeight: "bold" }}>
        Medalhas
      </Text>

      {medals.map((m, i) => (
        <View
          key={i}
          style={{
            padding: 20,
            backgroundColor: theme.colors.card,
            borderRadius: 20,
            marginTop: 20
          }}
        >
          <Text style={{ fontSize: 32 }}>{m.icon}</Text>
          <Text style={{ color: "#FFF", fontSize: 20 }}>{m.name}</Text>
        </View>
      ))}
    </View>
  );
}
