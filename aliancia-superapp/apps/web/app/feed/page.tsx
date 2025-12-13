import { useFeed } from "../../../src/social";
import { theme } from "ui/theme";
import { useState } from "react";

export default function FeedPage() {
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
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Feed Social</h1>
      <div style={{ marginTop: 32, maxWidth: 600 }}>
        <input
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Compartilhe algo..."
          style={{ padding: 12, borderRadius: 8, border: `1px solid ${theme.colors.border}`, width: 400 }}
        />
        <button onClick={handlePost} style={{ marginLeft: 12, padding: 12, borderRadius: 8, background: theme.colors.gold, color: "#000", fontWeight: 700 }}>
          Postar
        </button>
        <div style={{ marginTop: 24 }}>
          {feed.length === 0 && <div>Nenhuma publicação ainda.</div>}
          {feed.map((f, i) => (
            <div key={i} style={{ marginBottom: 18, color: theme.colors.text }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
