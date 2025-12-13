import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function Notifications() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Notificações
      </Text>
      <Text style={{ color: GOLD.textSecondary }}>
        Avisos, alertas e comunicados importantes
      </Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 18, fontWeight: "bold" }}>
            Atualização Disponível
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Uma nova versão da plataforma está disponível.
          </Text>
        </Card>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 18, fontWeight: "bold" }}>
            Novo Conteúdo
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Aula exclusiva lançada na Academy.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
