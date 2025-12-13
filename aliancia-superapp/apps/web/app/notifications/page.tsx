import { useNotifications } from "../../../src/notifications";
import { theme } from "ui/theme";

export default function NotificationsPage() {
  const { notifications } = useNotifications();

  return (
    <main style={{ background: theme.colors.bg, minHeight: "100vh", padding: 32 }}>
      <h1 style={{ fontSize: 34, color: theme.colors.gold }}>Notificações</h1>
      <ul style={{ marginTop: 32 }}>
        {notifications.length === 0 && <li>Nenhuma notificação.</li>}
        {notifications.map((n, i) => (
          <li key={i} style={{ marginBottom: 18, color: theme.colors.text }}>
            <strong>{n.title}</strong>
            <div style={{ opacity: 0.7 }}>{n.body}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
