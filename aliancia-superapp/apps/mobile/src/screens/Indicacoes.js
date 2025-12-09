import { View, Text } from "react-native";
import { theme } from "ui/theme";
import Animated, { FadeInRight } from "react-native-reanimated";

export default function Indicacoes() {
  const rede = [
    { nome: "Lucas", nivel: 1 },
    { nome: "Mariana", nivel: 1 },
    { nome: "Pedro", nivel: 2 },
    { nome: "Fernanda", nivel: 3 }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg, padding: 24 }}>
      <Text style={{ color: theme.colors.gold, fontSize: 32, fontWeight: "bold" }}>
        Sua Rede
      </Text>

      {rede.map((p, i) => (
        <Animated.View
          entering={FadeInRight.delay(i * 120)}
          key={i}
          style={{
            padding: 20,
            backgroundColor: theme.colors.card,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: theme.colors.border,
            marginTop: 16
          }}
        >
          <Text style={{ color: theme.colors.gold, fontSize: 20 }}>{p.nome}</Text>
          <Text style={{ color: "#AAA" }}>Nível {p.nivel}</Text>
        </Animated.View>
      ))}
    </View>
  );
}
