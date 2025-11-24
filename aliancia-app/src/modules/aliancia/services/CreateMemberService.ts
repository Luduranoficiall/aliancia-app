import { ReferralTreeService } from "./ReferralTreeService";

export interface CreateMemberDTO {
  nome: string;
  email: string;
  telefone?: string;
  cidade?: string;
  areaAtuacao?: string;
  codigoIndicacao?: string;
}

export interface MemberEntity extends CreateMemberDTO {
  id: string;
  createdAt: Date;
  uplines?: string[];
  referralBonuses?: any[];
}

export class CreateMemberService {
  private referralTree = new ReferralTreeService();

  async execute(data: CreateMemberDTO): Promise<MemberEntity> {
    if (!data.nome || !data.email) {
      throw new Error("Nome e e-mail são obrigatórios.");
    }

    const memberId = `mb_${Date.now()}`;

    const uplines = this.referralTree.resolveUplinesByCode(data.codigoIndicacao);

    const referralBonuses = this.referralTree.calculateReferralChain(
      memberId,
      uplines
    );

    const member: MemberEntity = {
      id: memberId,
      createdAt: new Date(),
      ...data,
      uplines,
      referralBonuses
    };

    console.log("Novo membro (mock):", member);

    return member;
  }
}
