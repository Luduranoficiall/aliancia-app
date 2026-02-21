import { GamificationEngine } from "../../src/gamification/GamificationEngine";
describe("GamificationEngine", () => {
  it("inicia com zero pontos e sem medalhas", () => {
    const g = new GamificationEngine();
    expect(g.points).toBe(0);
    expect(Array.isArray(g.medals)).toBe(true);
  });
});
