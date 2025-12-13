import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function FinanceCenter() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Finance Center
      </Text>
      <Text style={{ color: GOLD.textSecondary, marginTop: 4 }}>
        Painel financeiro Premium Master Ouro++
      </Text>
      <View style={{ marginTop: 30, gap: 20 }}>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Saldo Atual
          </Text>
          <Text style={{ color: GOLD.textPrimary, fontSize: 28, marginTop: 6 }}>
            R$ 12.480,00
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>Atualizado agora</Text>
        </Card>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Ganhos INDICA.I
          </Text>
          <Text style={{ color: GOLD.textPrimary, fontSize: 28, marginTop: 6 }}>
            R$ 3.200,00
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>Taxa Ouro++ ativa</Text>
        </Card>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Extrato Completo
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Clique para visualizar suas transações
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
