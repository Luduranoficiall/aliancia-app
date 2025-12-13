# Contribuindo para o ALIANCI.A App  
Nível: **Especialista Premium Master Ouro++**

Este documento define como desenvolvedores devem contribuir com o projeto.

---

## 🚀 Padrões fundamentais
- Usar **TypeScript** sempre.
- Não criar componentes sem tipagem explícita.
- Não usar `any`.
- Todos os commits devem seguir o padrão:
  `tipo(escopo): descrição`

Exemplos:
- `feat(ui): adiciona card diamond ultra`
- `fix(auth): corrige tipagem do usuário`
- `perf(store): otimiza zustand`

---

## 🧱 Estrutura de Pastas

app/ → Telas
src/
components/ → UI premium
theme/ → Design System
types/ → Tipos globais
services/ → Firebase/API
store/ → Zustand
utils/ → Helpers tipados

Jamais adicionar arquivos fora desses diretórios.

---

## 🎨 Design System
- Toda cor deve vir de:
  - `theme.ts`
  - `diamond.ts`
  - `diamondUltra.ts`
- Não use cores “hardcoded”.

---

## 🔒 Qualidade e Segurança
- Ativar `strict: true`
- Evitar side effects desnecessários
- Sempre criar **interfaces** para serviços e dados

---

## 🧪 Testes (opcional)
Contribuidores avançados devem preparar:
- testes unitários para utils
- teste de renderização para componentes
- snapshot para telas principais

---

## 🙌 Como Submeter PRs
1. Criar branch:
   `feat/feature-name`
2. Enviar PR com descrição clara.
3. PR deve conter:
   - motivação  
   - alterações  
   - impacto  
   - checklist de testes  

---

## 🏆 Filosofia do Projeto
O ALIANCI.A App mantém o padrão:

**"Clareza, Elegância, Segurança e Escalabilidade."**

Só contribua se for para elevar o nível do app.
