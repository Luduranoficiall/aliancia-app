import { useNotifications } from "../../../src/notifications";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Notifications() {
  const { notifications } = useNotifications();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações</Text>
      <ScrollView style={styles.list}>
        {notifications.length === 0 && <Text style={styles.empty}>Nenhuma notificação.</Text>}
        {notifications.map((n, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.itemTitle}>{n.title}</Text>
            <Text style={styles.itemBody}>{n.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bgDeep, padding: 24 },
  title: { fontSize: 32, color: theme.colors.gold, marginBottom: 18, fontWeight: "bold" },
  list: { flex: 1 },
  empty: { color: theme.colors.textDim, marginTop: 24 },
  item: { marginBottom: 18, backgroundColor: theme.colors.card, borderRadius: 8, padding: 16 },
  itemTitle: { color: theme.colors.gold, fontWeight: "bold" },
  itemBody: { color: theme.colors.text, marginTop: 4 }
});
