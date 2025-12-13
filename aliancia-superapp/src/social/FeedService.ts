// Serviço base para feed social premium
export class FeedService {
  getFeed(userId: string) {
    // Buscar feed do usuário
    return [
      { id: 1, type: "conquista", content: "Você atingiu Ouro++!" },
      { id: 2, type: "evento", content: "Live exclusiva hoje às 20h" }
    ];
  }
}
