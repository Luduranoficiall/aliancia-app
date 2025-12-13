import { Text } from "react-native";
import Screen from "../../src/components/Screen";
import DiamondCard from "../../src/components/DiamondCard";
import DiamondTitle from "../../src/components/DiamondTitle";
import { COLORS } from "../../src/theme/theme";
import { DIAMOND } from "../../src/theme/diamond";

export default function FinanceCenter() {
  return (
    <Screen>

      <DiamondTitle>Financeiro Diamante</DiamondTitle>

      <DiamondCard>
        <Text style={{
          color: DIAMOND.diamondWhite,
          fontSize: 20,
          fontWeight: "bold"
        }}>
          Saldo Total
        </Text>
        <Text style={{
          color: DIAMOND.glow,
          fontSize: 36,
          marginTop: 10
        }}>
          R$ 28.450,00
        </Text>
      </DiamondCard>

      <DiamondCard>
        <Text style={{
          color: DIAMOND.diamondWhite,
          fontSize: 20,
          fontWeight: "bold"
        }}>
          Ganhos INDICA.I Nível Diamante
        </Text>
        <Text style={{
          color: DIAMOND.glow,
          fontSize: 28,
          marginTop: 10
        }}>
          + 7% ativo
        </Text>
      </DiamondCard>

    </Screen>
  );
}
