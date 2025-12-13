import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function Marketplace() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Marketplace
      </Text>
      <Text style={{ color: GOLD.textSecondary }}>
        Produtos, serviços e benefícios exclusivos
      </Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Card height={140}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Benefícios Premium
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Acesse vantagens exclusivas da ALIANCI.A.
          </Text>
        </Card>
        <Card height={140}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Produtos Selecionados
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Itens recomendados com preços especiais.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
