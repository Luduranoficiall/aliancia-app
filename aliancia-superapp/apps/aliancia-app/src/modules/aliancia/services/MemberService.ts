import { MemberDTO } from '../dtos/MemberDTO';

// Mock: lista em memória
const members: MemberDTO[] = [];

export class MemberService {
  static register(member: MemberDTO): MemberDTO {
    // TODO: validar duplicidade de email/telefone
    members.push(member);
    return member;
  }

  static list(): MemberDTO[] {
    return members;
  }
}
