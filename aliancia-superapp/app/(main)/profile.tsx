import Screen from "@components/Screen";
import { GOLD } from "@theme/gold";
import { Text, View, TouchableOpacity } from "react-native";
import { useUserStore } from "@store/user";

export default function Profile() {
  const { user, logout } = useUserStore();

  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>
        Perfil
      </Text>
      <View style={{ marginTop: 24 }}>
        <Text style={{ color: GOLD.textPrimary, fontSize: 20 }}>{user?.email}</Text>
        <Text style={{ color: GOLD.textSecondary }}>Premium Master Ouro++</Text>
      </View>
      <TouchableOpacity
        onPress={logout}
        style={{
          marginTop: 40,
          borderColor: GOLD.gold,
          borderWidth: 1,
          padding: 14,
          borderRadius: 12
        }}
      >
        <Text style={{ color: GOLD.gold, textAlign: "center", fontSize: 18 }}>
          Sair
        </Text>
      </TouchableOpacity>
    </Screen>
  );
}
