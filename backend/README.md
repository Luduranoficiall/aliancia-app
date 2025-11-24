# Backend — ALIANCI.A

API FastAPI, banco de dados, integrações IA e WhatsApp.

## Estrutura
- `app.py`: inicialização FastAPI
- `routers/`: rotas REST
- `agent/`: inteligência artificial
- `services/`: integrações e lógica de negócio
- `utils/`: utilitários
- `config/`: variáveis de ambiente
- `controllers/`: lógica de controle
- `models.py`: modelos ORM
- `database.py`: conexão e setup

## Como rodar
```bash
cd backend
pip install -r requirements.txt
uvicorn app:app --reload
```

## Deploy
- Fly.io / Railway
