import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Screen from "../../src/components/Screen";
import Button from "../../src/components/Button";
import { COLORS } from "../../src/theme/theme";
import { login } from "../../src/services/auth";
import { useUserStore } from "../../src/store/user";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();

  async function handleLogin() {
    const res = await login(email, password);
    setUser(res.user);
    router.push("/(main)/dashboard");
  }

  return (
    <Screen>
      <Text style={{ color: COLORS.gold, fontSize: 32, fontWeight: "bold" }}>
        Bem-vindo
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={COLORS.textSecondary}
        style={{
          color: COLORS.textPrimary,
          borderWidth: 1,
          borderColor: COLORS.goldDark,
          borderRadius: 10,
          padding: 12,
          marginTop: 24
        }}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor={COLORS.textSecondary}
        style={{
          color: COLORS.textPrimary,
          borderWidth: 1,
          borderColor: COLORS.goldDark,
          borderRadius: 10,
          padding: 12,
          marginTop: 16
        }}
        onChangeText={setPassword}
      />

      <Button title="Entrar" onPress={handleLogin} />
    </Screen>
  );
}
