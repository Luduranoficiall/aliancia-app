# ALIANCI.A — Pacote Técnico Premium

## Estrutura
- apps/web: Next.js 14 (PWA, APIs auth/pagamentos, landing, dashboard, estatísticas)
- apps/mobile: Expo/React Native (tabs, push, splash, ícones)
- packages/ui: Design system ouro (theme, themeV2, logo, card, tree)
- packages/db: Prisma schema (users, members, payments, withdraw, medals, etc.)
- packages/api: Helpers (auth, commissions, gamification, push)
- infra: Dockerfile, docker-compose, CI/CD GitHub Actions

## Variáveis de ambiente
Veja `.env.example`:
- APP_URL
- DATABASE_URL
- JWT_SECRET
- STRIPE_KEY, STRIPE_PLAN_ID, STRIPE_WEBHOOK_SECRET
- OPENPIX_KEY
- EXPO_PROJECT_ID (EAS/Expo push)

## Fluxos principais
- Auth (login/register) via Next API
- Pagamentos Stripe (create + webhook) e OpenPix (create + webhook)
- Comissões automáticas (25/10/5) em `packages/api/commissions.ts`
- Wallet/saque PIX em `/api/wallet/withdraw`
- Gamificação (Medal) em `packages/api/gamification.ts`
- PWA offline: service worker em `public/sw.js`

## Build / Run
- Web dev: `npm run dev --workspace web`
- Web build/start: `npm run build --workspace web` e `npm run start --workspace web`
- Mobile (Expo): `npm run start --workspace mobile`
- Prisma: `npx prisma generate`

## EAS Builds (APK/IPA)
- Config: `apps/mobile/eas.json`
- Login: `eas login`
- Android: `eas build -p android --profile release`
- iOS: `eas build -p ios --profile release`

## CI/CD
- `.github/workflows/deploy-web.yml`: build + Vercel
- `.github/workflows/deploy-api.yml`: deploy Railway (requere `RAILWAY_TOKEN`)
- `.github/workflows/deploy.yml`: fluxo geral existente

## Assets
- Ícone: `apps/mobile/src/assets/icon.svg` (PNG gerado em `icon.png`, `icon-1024.png`)
- Splash: `apps/mobile/src/assets/splash.png`

## Segurança
- JWT secret obrigatório
- Webhooks Stripe/OpenPix validam secret/token; configure HTTPS público
- Atualizações npm: audit zero vulnerabilidades (após última execução)
