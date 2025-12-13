import { useAutomation } from "../../../src/automation";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Automation() {
  const { run } = useAutomation();
  const [task, setTask] = useState("");
  const [result, setResult] = useState("");

  const handleRun = async () => {
    if (!task) return;
    setResult("Executando...");
    const r = await run(task);
    setResult(r);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Automação</Text>
      <View style={styles.inputRow}>
        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="Descreva a tarefa..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleRun} style={styles.button}>
          <Text style={styles.buttonText}>Executar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bgDeep, padding: 24 },
  title: { fontSize: 32, color: theme.colors.gold, marginBottom: 18, fontWeight: "bold" },
  inputRow: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  input: { flex: 1, backgroundColor: theme.colors.card, borderRadius: 8, padding: 12, color: theme.colors.text },
  button: { marginLeft: 12, backgroundColor: theme.colors.gold, borderRadius: 8, padding: 12 },
  buttonText: { color: "#000", fontWeight: "bold" },
  result: { color: theme.colors.accent, marginTop: 18 }
});
