import { Text, View, TouchableOpacity } from "react-native";
import Screen from "../../src/components/Screen";
import { useUserStore } from "../../src/store/user";
import { DESIGN_SYSTEM } from "../../src/theme/theme";

export default function Profile() {
  const { user, logout } = useUserStore();

  return (
    <Screen>
      <Text
        style={{
          color: DESIGN_SYSTEM.colors.diamondBlue,
          fontSize: 32,
          fontWeight: "bold",
          textShadowRadius: 20,
          textShadowColor: DESIGN_SYSTEM.colors.diamondBlueDeep
        }}
      >
        Perfil DIAMOND ULTRA
      </Text>
      <Text style={{
        color: DESIGN_SYSTEM.colors.textPrimary,
        fontSize: 20,
        marginTop: 20
      }}>
        {user?.email}
      </Text>
      <Text style={{ color: DESIGN_SYSTEM.colors.textSecondary, marginTop: 4 }}>
        Conta Premium Master Ouro++
      </Text>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginTop: 40,
          padding: 14,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: DESIGN_SYSTEM.colors.gold
        }}
      >
        <Text
          style={{ color: COLORS.gold, textAlign: "center", fontSize: 18 }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}
