import { useGamification } from "../../../src/gamification";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Gamification() {
  const { points, medals } = useGamification();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gamificação</Text>
      <Text style={styles.points}>Pontos: {points}</Text>
      <Text style={styles.subtitle}>Medalhas:</Text>
      <ScrollView style={styles.list}>
        {medals.length === 0 && <Text style={styles.empty}>Nenhuma medalha ainda.</Text>}
        {medals.map((m, i) => (
          <Text key={i} style={styles.medal}>{m}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bgDeep, padding: 24 },
  title: { fontSize: 32, color: theme.colors.gold, marginBottom: 18, fontWeight: "bold" },
  points: { fontSize: 22, color: theme.colors.accent, marginBottom: 12 },
  subtitle: { fontWeight: "bold", color: theme.colors.text, marginBottom: 8 },
  list: { flex: 1 },
  empty: { color: theme.colors.textDim, marginTop: 24 },
  medal: { color: theme.colors.gold, marginBottom: 8 }
});
