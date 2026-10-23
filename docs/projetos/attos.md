# Attos — App de treino com Coach de IA

> Ficha do projeto: a fonte completa das informações. O card do portfólio (`src/data/data.json`, projeto `id` 8) é um resumo desta ficha. Quando algo mudar, atualize aqui primeiro e depois o card.

| | |
| --- | --- |
| Status | App Android em lançamento na Google Play (versão 1.0.8, outubro/2026) |
| Tipo | Produto próprio, para o público final |
| Site | https://attosfit.com |
| Google Play | _preencher quando publicar_ |
| Código | Repositório privado (`Antonio13050/attos-app`) |
| Pasta local | `Documents/projetos/fit/vitalix` (Vitalix era o nome provisório) |
| Idiomas do app | Português, espanhol e inglês |

## Em uma frase

App de musculação e nutrição para Android com um Coach de IA que conhece a ficha do atleta, monta treinos que viram fichas salvas com um toque e digitaliza fichas de papel a partir de uma foto.

## O que o app faz

- **Treinos:** criação e edição de rotinas, biblioteca com 101 exercícios (vídeo e passo a passo) e exercícios próprios.
- **Treino ativo:** registro de séries, cargas e repetições, mostrando a carga da última vez; reordenar exercícios e adicionar séries no meio do treino.
- **Dieta, água e suplementos:** metas de calorias e macros, meta de água pelo peso, lembretes com horário de silêncio.
- **Evolução:** constância, volume, recordes com 1RM estimado, mapa dos músculos mais treinados, peso corporal e conquistas; cards para compartilhar.
- **Conta e plano:** login Google com backup na nuvem; plano Attos PRO por assinatura.

## A IA no Attos

### Coach IA (chat)

- **Contexto do atleta:** o app monta um dossiê com perfil, IMC, TMB/TDEE, treinos recentes, músculos treinados, macros, suplementos e água (`aiContextEngine.ts`) e envia como contexto.
- **Resposta em streaming** via Server-Sent Events.
- **Saída estruturada:** quando o Coach sugere um treino, a resposta termina num bloco JSON (`treino_sugerido`) que o app transforma num card com o botão "Salvar em Meus treinos".
- **Restrição de escopo:** recusa assuntos fora de treino, nutrição e uso do app.
- **Três idiomas:** diretivas por idioma no prompt, com as chaves do JSON fixas para o app ler.

### Leitura de ficha de papel (visão computacional)

- O atleta fotografa a ficha da academia; um modelo de visão lê tabelas, letra à mão e marcações de cor.
- Devolve um treino por dia ou cor da ficha, na ordem dos exercícios, com séries e repetições padrão quando a ficha não traz os números.

### Dieta ajustada pela IA (PRO)

- Gera um cardápio em JSON a partir das metas de macros, do objetivo e dos alimentos que o atleta não come.

### Servidor próprio: Coach API

Cloudflare Worker entre o app e o provedor de IA (OpenRouter), publicado em `api.attosfit.com`:

- A chave do provedor e os prompts ficam só no servidor.
- **Troca automática de modelo:** listas por tipo de tarefa (chat, visão, JSON), tentadas em ordem; dá para trocar de modelo sem publicar o app. Hoje usa Gemini 2.5 Flash, Gemini Flash-Lite, GPT-4o mini e modelos gratuitos do OpenRouter.
- **Limite diário** por usuário e por IP, guardado no Cloudflare D1 (grátis: 5 mensagens/dia; PRO: 200).
- **Identificação** pelo token do Firebase (login Google) ou pelo ID da instalação.
- **Plano PRO** conferido no RevenueCat.
- **Denúncia de respostas** do Coach, guardadas para revisão.

### O que não é IA

- Os treinos do primeiro dia saem de um gerador por regras (`smartWorkoutGenerator.ts`), a partir de seis perguntas do cadastro. Não chamar de IA no portfólio.

## Stack

- **App:** React 19, TypeScript, Vite, Tailwind CSS, Capacitor (Android), Recharts
- **IA:** OpenRouter, Gemini (texto e visão), streaming SSE, saída em JSON
- **Servidor:** Cloudflare Workers, Cloudflare D1
- **Conta e pagamentos:** Firebase Authentication, RevenueCat
- **Testes:** Vitest (47 arquivos de testes unitários, inclusive do Coach API) e Playwright (ponta a ponta, inclusive o Coach)

## Imagens

- Capa do card: `src/assets/covers/attos.webp`, feita a partir de `store/pt-BR/feature-1024x500.png`.
- Prints da loja em três idiomas ficam em `store/` no projeto do app.

## Pendências

- [ ] Link da Google Play depois da publicação (entra no card no lugar do site, ou ao lado dele).
- [ ] Decidir se o repositório continua privado.
