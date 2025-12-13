import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Onboarding() {
  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>ALIANCI.A</Text>
      <Text style={{ fontSize: 20, marginTop: 12 }}>Bem-vindo ao nível Premium Master Ouro++</Text>

      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={{ marginTop: 40 }}>
          <Text style={{ fontSize: 20 }}>Entrar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
