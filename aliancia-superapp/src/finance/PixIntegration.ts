
import axios from "axios";

const PIX_API_KEY = process.env.PIX_API_KEY || "";
const PIX_API_URL = process.env.PIX_API_URL || "https://api.exemplo-pix.com/v1/pix/send";

export class PixIntegration {
  async sendPix(to: string, value: number) {
    if (!PIX_API_KEY) return "[ERRO] PIX_API_KEY não configurada.";
    try {
      const res = await axios.post(
        PIX_API_URL,
        { to, value },
        { headers: { "Authorization": `Bearer ${PIX_API_KEY}` } }
      );
      return res.data?.message || "PIX enviado com sucesso!";
    } catch (e: any) {
      return `[ERRO] Falha no Pix: ${e?.message || e}`;
    }
  }
}
