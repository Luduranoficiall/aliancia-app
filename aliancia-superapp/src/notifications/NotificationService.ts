// Serviço base para notificações inteligentes
export class NotificationService {
  sendPush(userId: string, title: string, body: string) {
    // Integrar com Firebase, Expo Notifications, OneSignal, etc.
    // Exemplo mock:
    console.log(`[Notificação] ${userId}: ${title} - ${body}`);
  }
}
