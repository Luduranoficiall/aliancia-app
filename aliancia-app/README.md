# ALIANCI.A Backend (MVP)

## Como rodar

```bash
npm run dev
```

- O projeto usa TypeScript e Express.
- Scripts ajustados para ambientes sem suporte a symlink (`--no-bin-links`).
- Se precisar compilar, use:

```bash
npm run build
```

## Estrutura inicial
- `src/server.ts`: ponto de entrada do backend.
- `src/modules/aliancia/`: módulos para controllers, services e rotas.
- `src/config/`: configs e variáveis de ambiente.
- `src/shared/`: utilitários e assets compartilhados.

## Observações
- Variáveis sensíveis devem ir em `.env` (não versionado).
- Para expandir, crie módulos em `src/modules/` conforme os domínios do app.
- Qualquer limitação de ambiente (ex.: symlink) já está contornada nos scripts.
