import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";

export default function Academy() {
  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Academy
      </Text>
      <Text style={{ color: GOLD.textSecondary }}>Cursos, aulas e treinamentos</Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Card height={140}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Aulas Exclusivas
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Conteúdos feitos especialmente para membros Ouro++.
          </Text>
        </Card>
        <Card height={140}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Trilhas de Evolução
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Siga trilhas para evolução mental, espiritual e financeira.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
