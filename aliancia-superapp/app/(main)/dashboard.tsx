import { Text, View } from "react-native";
import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { useUserStore } from "@store/user";

export default function Dashboard() {
  const { user } = useUserStore();

  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Bem-vindo, {user?.displayName}
      </Text>
      <Text style={{ color: GOLD.textSecondary, marginTop: 6 }}>
        Status: Premium Master Ouro++
      </Text>
      <View style={{ marginTop: 32, gap: 20 }}>
        <Card>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>INDICA.I</Text>
          <Text style={{ color: GOLD.textSecondary }}>Benefícios e progressão</Text>
        </Card>
        <Card>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>Finance Center</Text>
          <Text style={{ color: GOLD.textSecondary }}>Ganhos e extratos</Text>
        </Card>
        <Card>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>Comunidade</Text>
          <Text style={{ color: GOLD.textSecondary }}>Conexões entre membros</Text>
        </Card>
      </View>
    </Screen>
  );
}
