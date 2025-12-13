import { usePix } from "../../../src/finance";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Pix() {
  const { send } = usePix();
  const [to, setTo] = useState("");
  const [value, setValue] = useState(0);
  const [msg, setMsg] = useState("");

  const handleSend = async () => {
    try {
      await send(to, value);
      setMsg("Pix enviado com sucesso!");
    } catch {
      setMsg("Erro ao enviar Pix.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carteira Digital</Text>
      <TextInput
        placeholder="Chave Pix"
        value={to}
        onChangeText={setTo}
        style={styles.input}
      />
      <TextInput
        placeholder="Valor"
        value={value ? String(value) : ""}
        onChangeText={v => setValue(Number(v))}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleSend} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Pix</Text>
      </TouchableOpacity>
      {msg ? <Text style={styles.msg}>{msg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bgDeep, padding: 24 },
  title: { fontSize: 32, color: theme.colors.gold, marginBottom: 18, fontWeight: "bold" },
  input: { backgroundColor: theme.colors.card, borderRadius: 8, padding: 12, color: theme.colors.text, marginBottom: 12 },
  button: { backgroundColor: theme.colors.gold, borderRadius: 8, padding: 14, alignItems: "center", marginTop: 8 },
  buttonText: { color: "#000", fontWeight: "bold" },
  msg: { marginTop: 18, color: theme.colors.accent }
});
