import { Router } from 'express';
import { MemberController } from '../controllers/MemberController';

const router = Router();

// Cadastro de membro
router.post('/members', MemberController.register);
// Listagem de membros (mock)
router.get('/members', MemberController.list);

export default router;
