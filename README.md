ALIANCI.A — SUPERAPP
Documentação Oficial — Nível HARD PREMIUM MASTER OURO++

📘 SOBRE O PROJETO

ALIANCI.A é um Superapp multiplataforma (Android, iOS e Web), projetado para:

- Construir uma comunidade ativa e próspera
- Integrar cashback, wallet, PIX, benefícios e marketplace
- Controlar rede de indicações inteligente (25/10/5)
- Usar MI.A (IA integrada) como assistente oficial
- Entregar conteúdo, evolução e prosperidade
- Criar uma experiência premium nível fintech

🛠 TECNOLOGIAS PRINCIPAIS

- Next.js 14 (Web + PWA + Landing + Admin)
- React Native + Expo (Mobile)
- Prisma + PostgreSQL (DB)
- Stripe / OpenPix (Pagamentos automáticos)
- FCM Notifications
- Docker + GitHub Actions (CI/CD)
- Railway (API) + Vercel (Web)

🔥 ARQUITETURA (HARD MODE)
```
aliancia-superapp/
 ├── apps/
 │    ├── web/            → Next.js 14
 │    ├── mobile/         → Expo / React Native
 │
 ├── packages/
 │    ├── api/            → Lógica backend compartilhada
 │    ├── db/             → Prisma + migrations
 │    ├── ui/             → Design system GOLD
 │
 ├── landing/             → Landing Page oficial
 ├── .github/             → CI/CD pipelines
 ├── Dockerfile
 ├── docker-compose.yml
 └── README.md
```

💳 PAGAMENTOS
- Stripe (assinaturas)
- OpenPix (PIX automático)
- Webhooks ativam usuários e geram comissões

🔔 NOTIFICAÇÕES
- Expo Push Notifications
- Eventos automáticos:
  - Novo indicado
  - Comissão liberada
  - PIX aprovado
  - Conteúdo novo na Academia
  - Lembrete de reunião

🧠 MI.A — ASSISTENTE IA
- Chat em tempo real
- Sugestões personalizadas
- Alertas financeiros
- Onboarding inteligente

💰 COMISSÕES (25 / 10 / 5)
- Cálculo automático
- Registro de árvore
- Carteira interna (wallet)
- Saques via PIX

🎨 TEMA ALIANCI.A V2 (OURO METALIZADO)
- Ouro líquido
- Bordas metalizadas
- Componentes premium
- Animações suaves

📦 BUILD & DEPLOY
WEB
```
npm install
npm run build
npm start
```

MOBILE (APK / IPA)
```
eas build -p android
eas build -p ios
```

🏦 SERVIDORES
- Web → Vercel
- API → Railway
- Mobile → Expo Build Service
- Banco → PostgreSQL (Railway/Supabase)

🔐 SEGURANÇA
- JWT com expiração
- Hash de senha (bcrypt)
- Rate limit nas rotas
- Webhooks assinados

📈 ROADMAP
- Gamificação avançada
- Marketplace completo
- Badge system hard
- Community Feed
- Cashback em camadas
- Sugestões MI.A preditivas
