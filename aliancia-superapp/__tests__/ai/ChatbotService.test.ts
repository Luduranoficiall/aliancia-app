import { ChatbotService } from "../../src/ai/ChatbotService";
describe("ChatbotService", () => {
  it("retorna resposta da IA", async () => {
    const service = new ChatbotService();
    const resposta = await service.sendMessage("Olá, IA!");
    expect(typeof resposta).toBe("string");
    expect(resposta.length).toBeGreaterThan(0);
  });
});
