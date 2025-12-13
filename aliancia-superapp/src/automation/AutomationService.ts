// Serviço base para automação de tarefas
export class AutomationService {
  schedulePayment(userId: string, date: string, value: number) {
    // Agendar pagamento automático
    console.log(`[Automação] Pagamento de R$${value} agendado para ${date} por ${userId}`);
  }
}
