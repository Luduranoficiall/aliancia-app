import { Text, View, TouchableOpacity } from "react-native";
import Screen from "../../src/components/Screen";
import { useUserStore } from "../../src/store/user";
import { COLORS } from "../../src/theme/theme";
import { DIAMOND_ULTRA } from "../../src/theme/diamondUltra";

export default function Profile() {
  const { user, logout } = useUserStore();

  return (
    <Screen>
      <Text
        style={{
          color: DIAMOND_ULTRA.diamondBlue,
          fontSize: 32,
          fontWeight: "bold",
          textShadowRadius: 20,
          textShadowColor: DIAMOND_ULTRA.diamondBlueDeep
        }}
      >
        Perfil DIAMOND ULTRA
      </Text>
      <Text style={{
        color: COLORS.textPrimary,
        fontSize: 20,
        marginTop: 20
      }}>
        {user?.email}
      </Text>
      <Text style={{ color: COLORS.textSecondary, marginTop: 4 }}>
        Conta Premium Master Ouro++
      </Text>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginTop: 40,
          padding: 14,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: COLORS.gold
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
