import { NotificationService } from "./NotificationService";

const notificationService = new NotificationService();

export function useNotifications() {
  const send = (userId: string, title: string, body: string) => {
    notificationService.sendPush(userId, title, body);
  };
  return { send };
}
