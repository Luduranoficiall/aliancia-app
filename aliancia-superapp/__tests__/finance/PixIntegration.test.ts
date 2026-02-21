import { PixIntegration } from "../../src/finance/PixIntegration";
describe("PixIntegration", () => {
  it("envia Pix sem erro", async () => {
    const pix = new PixIntegration();
    const result = await pix.sendPix("fake_chave", 10);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});
