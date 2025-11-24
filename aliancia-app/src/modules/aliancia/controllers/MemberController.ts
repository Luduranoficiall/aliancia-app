import { Request, Response } from 'express';
import { MemberService } from '../services/MemberService';
import { MemberDTO } from '../dtos/MemberDTO';

export class MemberController {
  static register(req: Request, res: Response) {
    const data: MemberDTO = req.body;
    // TODO: validação mais robusta
    if (!data.name || !data.email || !data.phone || !data.city || !data.occupation || !data.acceptTerms) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando ou termos não aceitos.' });
    }
    const member = MemberService.register(data);
    res.status(201).json(member);
  }

  static list(req: Request, res: Response) {
    const members = MemberService.list();
    res.json(members);
  }
}
