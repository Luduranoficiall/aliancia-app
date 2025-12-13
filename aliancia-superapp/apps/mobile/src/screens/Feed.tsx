import { useFeed } from "../../../src/social";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { theme } from "ui/theme";

export default function Feed() {
  const { getFeed, post } = useFeed();
  const [content, setContent] = useState("");
  const [feed, setFeed] = useState([]);

  const handlePost = async () => {
    if (!content) return;
    await post(content);
    setContent("");
    setFeed(await getFeed());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed Social</Text>
      <View style={styles.inputRow}>
        <TextInput
          value={content}
          onChangeText={setContent}
          placeholder="Compartilhe algo..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handlePost} style={styles.button}>
          <Text style={styles.buttonText}>Postar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.feed}>
        {feed.length === 0 && <Text style={styles.empty}>Nenhuma publicação ainda.</Text>}
        {feed.map((f, i) => (
          <Text key={i} style={styles.post}>{f}</Text>
        ))}
      </ScrollView>
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
  feed: { flex: 1 },
  empty: { color: theme.colors.textDim, marginTop: 24 },
  post: { color: theme.colors.text, marginBottom: 12 }
});
