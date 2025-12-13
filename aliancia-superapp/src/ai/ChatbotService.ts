// Serviço base para Chatbot IA (OpenAI, Assistente Financeiro, etc)
export class ChatbotService {
  async sendMessage(message: string, context?: any): Promise<string> {
    // Aqui você pode integrar com OpenAI, Azure, Anthropic, etc.
    // Exemplo mock:
    return `Resposta IA para: ${message}`;
  }
}
