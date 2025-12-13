import { Request, Response } from 'express';
import { MemberService } from '../services/MemberService';
import { MemberDTO } from '../dtos/MemberDTO';

export class MemberController {
  static register(req: Request, res: Response) {
    const data: MemberDTO = req.body;
      // Criptografar dados sensíveis
      const encryptedEmail = CryptoJS.AES.encrypt(data.email, process.env.CRYPTO_SECRET!).toString();
      const encryptedName = CryptoJS.AES.encrypt(data.name, process.env.CRYPTO_SECRET!).toString();
    // TODO: validação mais robusta
    if (!data.name || !data.email || !data.phone || !data.city || !data.occupation || !data.acceptTerms) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando ou termos não aceitos.' });
    }
      const member = MemberService.register({
        ...data,
        email: encryptedEmail,
        name: encryptedName,
      });
    res.status(201).json(member);
  }

  static list(req: Request, res: Response) {
    const members = MemberService.list();
    res.json(members);
  }
}
