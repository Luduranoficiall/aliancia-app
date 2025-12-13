import { useDarkUltra } from "../../../src/theme/dynamic";
import { View, Text, StyleSheet } from "react-native";

export default function ThemeScreen() {
  const darkUltra = useDarkUltra();

  return (
    <View style={[styles.container, { backgroundColor: darkUltra.bg }]}>
      <Text style={[styles.title, { color: darkUltra.gold }]}>Tema Dinâmico: Dark Ultra</Text>
      <View style={[styles.card, { backgroundColor: darkUltra.card }]}>
        <Text style={{ color: darkUltra.text, fontWeight: "bold" }}>Exemplo de Card Premium</Text>
        <Text style={{ color: darkUltra.text }}>Este é um card com o tema Dark Ultra aplicado.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  title: { fontSize: 32, marginBottom: 18, fontWeight: "bold" },
  card: { marginTop: 32, borderRadius: 12, padding: 24 }
});
