import Screen from "@components/Screen";
import Card from "@components/Card";
import { GOLD } from "@theme/gold";
import { Text, View } from "react-native";
import { calcularBeneficioIndicaI } from "@utils/indicaI";

export default function IndicaI() {
  const { percentual, descricao } = calcularBeneficioIndicaI(3);

  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        INDICA.I
      </Text>
      <Text style={{ color: GOLD.textSecondary }}>
        Programa de benefícios Premium Master Ouro++
      </Text>
      <View style={{ marginTop: 24, gap: 20 }}>
        <Card height={150}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Benefício Atual
          </Text>
          <Text style={{ color: GOLD.textPrimary, fontSize: 42, marginTop: 10 }}>
            {(percentual * 100).toFixed(0)}%
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>{descricao}</Text>
          <View
            style={{
              width: "100%",
              height: 8,
              backgroundColor: GOLD.border,
              marginTop: 12,
              borderRadius: 8
            }}
          >
            <View
              style={{
                width: `${percentual * 100}%`,
                height: "100%",
                backgroundColor: GOLD.gold,
                borderRadius: 8
              }}
            />
          </View>
        </Card>
        <Card height={130}>
          <Text style={{ color: GOLD.gold, fontSize: 20, fontWeight: "bold" }}>
            Linha do Tempo
          </Text>
          <Text style={{ color: GOLD.textSecondary }}>
            Acompanhamento mês a mês do seu crescimento.
          </Text>
        </Card>
      </View>
    </Screen>
  );
}
