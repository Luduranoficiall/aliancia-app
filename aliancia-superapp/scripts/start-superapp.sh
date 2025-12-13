#!/bin/bash
# Script premium para rodar o aliancia-superapp de qualquer lugar

cd "$(dirname "$0")/.."
cd aliancia-superapp 2>/dev/null || true

if [ ! -f package.json ]; then
  echo "[ERRO] Não foi encontrado package.json em aliancia-superapp. Verifique o caminho."
  exit 1
fi

npm install
npm run expo
