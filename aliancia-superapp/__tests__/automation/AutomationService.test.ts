import { AutomationService } from "../../src/automation/AutomationService";
describe("AutomationService", () => {
  it("executa tarefa e retorna resultado", async () => {
    const automation = new AutomationService();
    const result = await automation.run("tarefa teste");
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});
