# ALIANCI.A — Ecossistema Oficial

Sistema híbrido: aplicativo web, site institucional, painel do membro, marketplace, cashback, IA e automação total.

## Visão Geral
O ALIANCI.A é um ecossistema completo para comunidade, networking, cashback, IA, marketplace e painel do membro. Pronto para produção, escalável e seguro.

## Estrutura de Pastas
```
/root
 ├── backend/
 │     ├── app.py
 │     ├── requirements.txt
 │     ├── routers/
 │     ├── agent/
 │     ├── services/
 │     ├── utils/
 │     ├── config/
 │     ├── database.py
 │     ├── models.py
 │     ├── controllers/
 │     └── README.md
 ├── frontend/
 │     ├── next.config.js
 │     ├── app/
 │     ├── public/
 │     ├── components/
 │     ├── styles/
 │     ├── package.json
 │     └── README.md
 ├── .github/
 │     └── workflows/
 │            └── deploy.yml
 ├── LICENSE
 ├── README.md
 └── roadmap.md
```

## Como rodar localmente

### Backend (FastAPI)
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

### Frontend (Next.js)
```bash
cd frontend
npm install
npm run dev
```

## Deploy
- Backend: Fly.io / Railway
- Frontend: Vercel / Fly.io

## Variáveis de Ambiente
- `DATABASE_URL` (backend)
- `RAILWAY_TOKEN` (deploy opcional)
- `VERCEL_TOKEN` (deploy opcional)

## Funcionalidades
- Cadastro em 3 níveis
- Cashback multi-nível
- IA pessoal do membro
- Ferramentas inteligentes (AURI.A, PREDITIVI.A, IDEI.A, VERIFICA.I.)
- Marketplace ECONOMI.A
- Painel do membro
- Integração WhatsApp

## Checklist de Produção
- [x] Código limpo e modular
- [x] Logs claros e humanizados
- [x] Tratamento de erros amigável
- [x] Funções puras sempre que possível
- [x] Pronto para escalar e evoluir
- [x] CI/CD automatizado

## Exemplos de Uso
- Acesse `/docs` no backend para testar a API
- Use o painel do membro no frontend para simular ganhos, cashback e acessar IA

---
> Código limpo, modular, seguro, pronto para escalar. Qualquer dúvida, consulte os READMEs de backend e frontend.
