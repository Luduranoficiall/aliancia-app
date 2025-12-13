#!/bin/bash
# Diagnóstico premium: instala dependências, roda lint e testes automaticamente
cd "$(dirname "$0")/.."

if [ ! -f package.json ]; then
  echo "[ERRO] Não foi encontrado package.json em aliancia-superapp. Verifique o caminho."
  exit 1
fi

npm install
npx eslint . --ext .ts,.tsx || true
npx jest || true

echo "\n[OK] Diagnóstico completo! Veja os resultados acima."
