
import { View, Text } from "react-native";
import DiamondUltraBackground from "../../src/components/DiamondUltraBackground";
import DiamondUltraCard from "../../src/components/DiamondUltraCard";
import DiamondUltraTitle from "../../src/components/DiamondUltraTitle";
import { DESIGN_SYSTEM } from "../../src/theme/theme";
import { useUserStore } from "../../src/store/user";

export default function Dashboard() {
  const { user } = useUserStore();
  return (
    <DiamondUltraBackground>
      <View style={{ padding: 24 }}>
        <DiamondUltraTitle>
          DIAMOND ULTRA
        </DiamondUltraTitle>
        <Text
          style={{
            color: DIAMOND_ULTRA.gold,
            fontSize: 18,
            marginTop: 4
          }}
        >
          {user?.displayName || "Membro ALIANCI.A"}
        </Text>
        <View style={{ marginTop: 40, gap: 26 }}>
          <DiamondUltraCard>
            <Text style={{
              color: DESIGN_SYSTEM.colors.diamondBlue,
              fontSize: 22,
              fontWeight: "bold"
            }}>
              Status Ultra
            </Text>
            <Text style={{ color: DESIGN_SYSTEM.colors.goldBright }}>
              Você alcançou o nível máximo do ecossistema.
            </Text>
          </DiamondUltraCard>
          <DiamondUltraCard>
            <Text style={{
              color: DESIGN_SYSTEM.colors.diamondBlue,
              fontSize: 22,
              fontWeight: "bold"
            }}>
              Benefício Ultra
            </Text>
            <Text style={{ color: DESIGN_SYSTEM.colors.goldBright }}>
              +10% INDICA.I — limite total desbloqueado
            </Text>
          </DiamondUltraCard>
          <DiamondUltraCard>
            <Text style={{
              color: DIAMOND_ULTRA.diamondBlue,
              fontSize: 22,
              fontWeight: "bold"
            }}>
              Prioridade Absoluta
            </Text>
            <Text style={{ color: DIAMOND_ULTRA.goldBright }}>
              Acesso liberado a todos os recursos premium.
            </Text>
          </DiamondUltraCard>
        </View>
      </View>
    </DiamondUltraBackground>
  );
}
