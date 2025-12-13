import { useState } from "react";
import { Text, TextInput } from "react-native";
import Screen from "@components/Screen";
import Button from "@components/Button";
import { GOLD } from "@theme/gold";
import { login } from "@services/auth";
import { useUserStore } from "@store/user";
import { router } from "expo-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUserStore();

  async function handleLogin() {
    const user = await login(email, password);
    setUser(user);
    router.push("/(main)/dashboard");
  }

  return (
    <Screen>
      <Text style={{ color: GOLD.gold, fontSize: 28, fontWeight: "bold" }}>Entrar</Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor={GOLD.textSecondary}
        style={{
          borderColor: GOLD.goldDark,
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginTop: 24,
          color: GOLD.textPrimary
        }}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor={GOLD.textSecondary}
        style={{
          borderColor: GOLD.goldDark,
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginTop: 12,
          color: GOLD.textPrimary
        }}
        onChangeText={setPassword}
      />
      <Button title="Acessar" onPress={handleLogin} />
    </Screen>
  );
}
