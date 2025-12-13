# Guia Rápido para Devs — ALIANCI.A Superapp

## 1. Instalação Premium

```bash
./scripts/start-superapp.sh
```

## 2. Scripts Premium

- `npm run expo` — Inicia o app Expo
- `npm run android` — Roda no Android
- `npm run ios` — Roda no iOS
- `npm run web` — Roda no navegador
- `npx jest` — Testes automatizados
- `npx eslint . --ext .ts,.tsx` — Lint premium

## 3. Testes

- Todos os componentes e telas principais devem ter testes automatizados.
- Use `@testing-library/react-native` para testes de UI.

## 4. Lint e Qualidade

- Siga o padrão do `.eslintrc.json`.
- Corrija todos os avisos antes de subir PR.

## 5. Segurança

- Rode `npm audit` regularmente.
- Nunca exponha segredos no código.

## 6. CI/CD

- O workflow GitHub Actions executa build, lint e testes a cada push/PR.

## 7. Dúvidas?

Consulte o README ou fale com o time LUDURANOFICIALL.

ARRASA! 🚀
