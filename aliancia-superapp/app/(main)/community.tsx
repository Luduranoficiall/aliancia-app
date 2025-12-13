import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function Community() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Comunidade
      </Text>
      <Text style={{ color: GOLD.textSecondary }}>
        Interaja com os membros da ALIANCI.A
      </Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Feed Oficial
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Anúncios, novidades e comunicados.
          </Text>
        </Card>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Grupos Premium
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Conecte-se por nichos e interesses.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
