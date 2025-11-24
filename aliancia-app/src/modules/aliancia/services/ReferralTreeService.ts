/**
 * Serviço responsável pela arvore de indicações (3 níveis)
 * Estrutura de bônus padrão:
 * - Nível 1: 25%
 * - Nível 2: 10%
 * - Nível 3: 5%
 */

export interface ReferralNode {
  id: string;
  uplineId?: string | null;
  level: number;
}

export interface ReferralBonus {
  level: number;
  percentage: number;
  recipientId: string;
}

export class ReferralTreeService {
  /**
   * Retorna quanto cada nível recebe, baseado no ID do novo membro.
   * Por enquanto MOCK — depois vamos conectar no banco real.
   */
  calculateReferralChain(memberId: string, uplines: string[]): ReferralBonus[] {
    const percentages = [0.25, 0.10, 0.05]; // 25%, 10%, 5%

    return uplines.slice(0, 3).map((uplineId, index) => ({
      level: index + 1,
      percentage: percentages[index],
      recipientId: uplineId
    }));
  }

  /**
   * Esse método simula recuperar o upline pelo código de indicação.
   * Depois conectaremos isso ao banco.
   */
  resolveUplinesByCode(code?: string): string[] {
    if (!code) return [];

    // MOCK temporário
    // Exemplo: o recomendado traz 3 uplines "fictícios"
    return ["upline_nivel_1", "upline_nivel_2", "upline_nivel_3"];
  }
}
