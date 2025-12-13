
import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

export class ChatbotService {
  async sendMessage(message: string, context?: any): Promise<string> {
    if (!OPENAI_API_KEY) return "[ERRO] OPENAI_API_KEY não configurada.";
    try {
      const res = await axios.post(
        OPENAI_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            ...(context?.history || []),
            { role: "user", content: message }
          ]
        },
        {
          headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );
      return res.data.choices?.[0]?.message?.content || "[ERRO] Resposta vazia da IA.";
    } catch (e: any) {
      return `[ERRO] Falha na IA: ${e?.message || e}`;
    }
  }
}
