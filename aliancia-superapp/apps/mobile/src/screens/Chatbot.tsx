import { useChatbot } from "../../../src/ai";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Chatbot() {
  const { sendMessage, messages } = useChatbot();
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot IA</Text>
      <ScrollView style={styles.messages}>
        {messages.map((m, i) => (
          <Text key={i} style={m.role === "user" ? styles.user : styles.ia}>
            <Text style={{ fontWeight: "bold" }}>{m.role === "user" ? "Você" : "IA"}:</Text> {m.content}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua mensagem..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bgDeep, padding: 24 },
  title: { fontSize: 32, color: theme.colors.gold, marginBottom: 18, fontWeight: "bold" },
  messages: { flex: 1, marginBottom: 18 },
  user: { color: theme.colors.gold, marginBottom: 8 },
  ia: { color: theme.colors.text, marginBottom: 8 },
  inputRow: { flexDirection: "row", alignItems: "center" },
  input: { flex: 1, backgroundColor: theme.colors.card, borderRadius: 8, padding: 12, color: theme.colors.text },
  button: { marginLeft: 12, backgroundColor: theme.colors.gold, borderRadius: 8, padding: 12 },
  buttonText: { color: "#000", fontWeight: "bold" }
});
