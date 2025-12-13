
import { messaging } from "../services/firebase";
import { send } from "firebase/messaging";

// Serviço base para notificações inteligentes
export class NotificationService {
  async sendPush(userToken: string, title: string, body: string) {
    // Envia notificação push via Firebase Cloud Messaging
    try {
      await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          "Authorization": `key=${process.env.FIREBASE_SERVER_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: userToken,
          notification: { title, body }
        })
      });
    } catch (e) {
      console.log(`[Notificação ERRO] ${e}`);
    }
  }
}
