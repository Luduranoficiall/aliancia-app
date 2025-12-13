import { View, Text } from "react-native";
import Screen from "../../src/components/Screen";
import Card from "../../src/components/Card";
import { COLORS } from "../../src/theme/theme";

export default function Community() {
  return (
    <Screen>

      <Text style={{
        color: COLORS.gold,
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 28
      }}>
        Comunidade
      </Text>

      <Card height={140}>
        <Text style={{ color: COLORS.gold, fontSize: 20, fontWeight: "bold" }}>
          Feed
        </Text>
        <Text style={{ color: COLORS.textSecondary }}>
          Veja atualizações e anúncios da ALIANCI.A.
        </Text>
      </Card>

      <View style={{ height: 20 }} />

      <Card height={140}>
        <Text style={{ color: COLORS.gold, fontSize: 20, fontWeight: "bold" }}>
          Grupos
        </Text>
        <Text style={{ color: COLORS.textSecondary }}>
          Conecte-se com outros membros.
        </Text>
      </Card>

    </Screen>
  );
}
