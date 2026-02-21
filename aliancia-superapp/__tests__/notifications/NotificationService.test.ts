import { NotificationService } from "../../src/notifications/NotificationService";
describe("NotificationService", () => {
  it("envia notificação push sem erro", async () => {
    const service = new NotificationService();
    const result = await service.sendPush("fake_token", "Título Teste", "Mensagem Teste");
    expect(result).toBeUndefined();
  });
});
