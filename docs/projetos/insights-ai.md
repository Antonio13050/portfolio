# Insights AI — BI conversacional para tribunais

> Ficha do projeto: a fonte completa das informações. O card do portfólio (`src/data/data.json`, projeto `id` 1) é um resumo desta ficha. Quando algo mudar, atualize aqui primeiro e depois o card.
>
> **Fonte:** descrição da stack enviada por Antonio em 23/10/2026; card e papéis dos agentes validados por ele no mesmo dia. O código é corporativo e não está nesta máquina, então nada aqui foi conferido no código. Itens marcados com _(validar)_ são suposições.

| | |
| --- | --- |
| Status | _(validar)_ em produção? para quais tribunais? |
| Tipo | Projeto corporativo da Softplan |
| Código | Repositório corporativo, não pode ser linkado |
| Repositórios | `insights-ai-api/` (backend) e `insights-ai-frontend/` (frontend) |

## Em uma frase

BI conversacional para tribunais: perguntas em linguagem natural viram consultas e indicadores do CNJ, respondidos em streaming por um sistema multi-agente.

## A IA no Insights AI

- **Sistema multi-agente em LangGraph:** Guardian → Router → Specialists → Formatter.
  - Guardian: confere se a pergunta está no escopo.
  - Router: escolhe o especialista certo.
  - Specialists: usam as **9 tools SQL** de indicadores do CNJ (LangChain).
  - Formatter: monta a resposta final.
- **Agente de produtividade:** loop ReAct em LangGraph; identifica magistrados pelo nome mesmo escrito de forma aproximada (rapidfuzz, Unidecode, cache de nomes no Redis).
- **Modelos via LiteLLM:** o projeto deixou de usar o Gemini fixo; hoje o LLM passa pelo LiteLLM. _(validar: quais modelos/provedores e se há troca automática quando um falha)_
- **Memória das conversas:** estado do LangGraph persistido no Redis (`langgraph-checkpoint-redis`).
- **Observabilidade de LLM:** tracing no LangSmith.
- **Streaming:** respostas por SSE até o chat.

## Backend (`insights-ai-api/`)

- Python 3.12, FastAPI, Uvicorn (uvloop), Pydantic v2 e pydantic-settings.
- PostgreSQL com pools separados de leitura e escrita; SQLAlchemy async + asyncpg (com suporte a Oracle e SQL Server).
- Redis + redisvl: cache de queries, cache de nomes de magistrados e estado das conversas.
- Resiliência: APScheduler (tarefas periódicas), pybreaker (circuit breaker), slowapi/limits (rate limit por endpoint), tenacity (retries com backoff).
- Segurança: validação dos JWT do Keycloak (PyJWT + cryptography).
- Sentry em produção; Docker e docker-compose com escala horizontal.
- Testes: pytest (asyncio, cov) com meta de mais de 90% de cobertura; black, isort, flake8 e ruff.

## Frontend (`insights-ai-frontend/`)

- Next.js 16 (App Router, Turbopack), React 19, TypeScript 5.9, pnpm.
- Rotas públicas e privadas; API routes do Next como proxy autenticado para o backend.
- Chat com assistant-ui (três adapters próprios: modelo SSE, lista de conversas e histórico) e Markdown nas respostas.
- Login com next-auth v5 + Keycloak (OIDC), refresh de token e papéis; o JWT vai ao backend como `Authorization: Bearer`.
- Tailwind CSS v4, shadcn/ui + Radix, Recharts no dashboard de métricas, tema claro/escuro, next-intl.
- Estado com zustand, validação com zod, HTTP com ky.
- HTML vindo do LLM sanitizado (isomorphic-dompurify) antes de renderizar.
- Vitest + Testing Library, ESLint e SonarQube.

## Imagens

- Não há prints que possam ser mostrados. A capa do card é um **diagrama da arquitetura** (não é um print do sistema), em `src/assets/projects/insights-ai/01-arquitetura-<pt|en|es>.webp`.
- O diagrama é HTML: `docs/projetos/diagramas/insights-ai.html` (português) e `insights-ai-traducoes.py` (gera as versões `-en` e `-es`). Para gerar a imagem, sirva a pasta (`python -m http.server`) e use o Chrome headless:
  `chrome --headless=new --hide-scrollbars --window-size=1366,712 --screenshot=saida.png http://127.0.0.1:8000/insights-ai.html`, depois converta para `.webp`.

## Pendências

- [ ] Validar modelos/provedores usados via LiteLLM e se há troca automática.
- [ ] Status de produção e o que pode ser citado (tribunais, número de usuários).
