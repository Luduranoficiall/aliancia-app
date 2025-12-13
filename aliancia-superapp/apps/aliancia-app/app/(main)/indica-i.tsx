import { View, Text } from "react-native";
import Screen from "../../src/components/Screen";
import Card from "../../src/components/Card";
import { COLORS } from "../../src/theme/theme";
import { calcularBeneficioIndicaI } from "../../src/utils/indicaI";

export default function IndicaI() {
  const { percentual, descricao } = calcularBeneficioIndicaI(3);

  return (
    <Screen>

      <Text style={{
        color: COLORS.gold,
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 24
      }}>
        INDICA.I
      </Text>

      <Card height={150}>
        <Text style={{ color: COLORS.gold, fontSize: 20, fontWeight: "bold" }}>
          Seu benefício atual
        </Text>

        <Text style={{
          color: COLORS.textPrimary,
          fontSize: 40,
          marginTop: 10
        }}>
          {(percentual * 100).toFixed(0)}%
        </Text>

        <Text style={{ color: COLORS.textSecondary }}>{descricao}</Text>

        <View
          style={{
            width: "100%",
            height: 8,
            backgroundColor: COLORS.border,
            borderRadius: 6,
            marginTop: 12
          }}
        >
          <View
            style={{
              width: `${percentual * 100}%`,
              height: "100%",
              backgroundColor: COLORS.gold,
              borderRadius: 6
            }}
          />
        </View>
      </Card>

      <View style={{ height: 20 }} />

      <Card height={120}>
        <Text style={{ color: COLORS.gold, fontSize: 20, fontWeight: "bold" }}>
          Progresso até 5%
        </Text>
        <Text style={{ color: COLORS.textSecondary }}>
          Se mantenha ativo para evoluir.
        </Text>
      </Card>

    </Screen>
  );
}
