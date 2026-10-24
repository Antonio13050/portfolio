# Imobi — Agente de IA para imobiliárias no WhatsApp

> Ficha do projeto: a fonte completa das informações. O card do portfólio (`src/data/data.json`, projeto `id` 2) é um resumo desta ficha. Quando algo mudar, atualize aqui primeiro e depois o card.

| | |
| --- | --- |
| Status | **Em produção na Líder Imóveis**, cliente pagante. Versão 0.2.6 (outubro/2026), com homologação e produção numa VPS |
| Tipo | Produto próprio, vendido como serviço; o painel usa a marca do cliente ("Líder IA") |
| Código | Repositório **privado** (`Antonio13050/imob-ai`), por decisão: é um produto comercial em uso. O portfólio não linka para ele |
| Pasta local | `Documents/2026/imob-ai` |
| Histórico | 263 commits |
| Integrações | WhatsApp Cloud API (Meta) e CRM Apresenta.me |

## Em uma frase

Agente de IA que atende os leads de uma imobiliária pelo WhatsApp: entende texto e áudio, busca imóveis e dados de contrato no CRM, qualifica o lead e passa a conversa para o corretor certo quando precisa.

## Como funciona

1. **Edge Gateway (FastAPI):** recebe o webhook da Meta, confere a assinatura, descarta mensagens repetidas (idempotência) e agrupa mensagens seguidas do mesmo contato numa janela de 5 segundos (debouncer no Redis) antes de enfileirar.
2. **Worker:** consome a fila no PostgreSQL (`FOR UPDATE SKIP LOCKED`, várias instâncias em paralelo), transcreve áudios e roda o agente.
3. **Agente LangGraph:** ciclo agente ↔ ferramentas até ter a resposta.
4. **Outbox worker:** envia as respostas ao WhatsApp pelo padrão outbox, formatadas para o app e com paginação de listas de imóveis.
5. **Painel (Next.js):** conversas em tempo real, atendimento humano e administração.

## A IA no Imobi

- **Agente com ferramentas** (LangGraph + LangChain, modelos via OpenRouter/LiteLLM):
  - `crm_search_listings`: busca de imóveis no CRM por filtros (finalidade, tipo, bairro, preço…);
  - `crm_get_listing_by_reference`: imóvel pelo código do anúncio;
  - `crm_get_available_neighborhoods`: bairros com imóveis disponíveis;
  - `crm_get_contracts` e `crm_get_boleto`: contratos do cliente e segunda via de boleto;
  - `update_lead_qualification` e `set_intent_classification`: qualificação e intenção do lead;
  - `transfer_to_human` e `notify_agent`: passa para o corretor e avisa.
- **Áudio:** mensagens de voz são transcritas com Gemini 2.5 Flash antes de chegar ao agente.
- **Memória do lead:** o que o cliente já informou (finalidade, região, orçamento…) é gravado como fatos e entra no prompt, para o agente não repetir perguntas.

> Atenção: o card antigo dizia "recomendação de imóveis via busca vetorial (pgvector)". Isso **não** é verdade: a busca é feita pelo CRM com filtros. Há uma estrutura de embeddings/pgvector no código, mas sem busca vetorial em uso. Não citar pgvector como busca no portfólio.

## Atendimento humano

- O agente transfere a conversa quando o cliente pede ou quando não consegue resolver.
- O painel é um **PWA**: no Android, o botão de instalar; no iPhone, instruções para "Adicionar à Tela de Início" pelo Safari (`InstallPWAInstruction.tsx`).
- O corretor responsável recebe **notificação push** (Web Push com VAPID, service worker com som), mesmo com o app fechado e o celular bloqueado; no iPhone, com o app instalado na tela de início.
- Corretores entram e saem do **plantão** por comando no próprio WhatsApp.
- No painel, o corretor assume a conversa e responde em tempo real (WebSockets).

## Outros pontos

- Leads com país identificado pelo DDI do telefone e filtro por país.
- Tabelas para atender à LGPD.
- Observabilidade: OpenTelemetry + Jaeger, Prometheus, Grafana e Alertmanager.
- CI no GitHub Actions para backend, painel e segurança (gitleaks); 27 arquivos de teste com pytest.
- Deploy com Docker Compose e nginx numa VPS.

## Stack

- **Backend:** Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Redis
- **IA:** LangGraph, LangChain, LiteLLM, OpenRouter, Gemini (transcrição)
- **Painel:** Next.js 16, React 19, Tailwind CSS 4, shadcn/ui, TanStack Query, WebSockets, PWA com Web Push
- **Infra:** Docker, nginx, OpenTelemetry, Jaeger, Prometheus, Grafana, GitHub Actions

## Imagens

- Capa: diagrama da arquitetura (`00-arquitetura-<pt|en|es>.webp`) e, em seguida, o fluxo simples (`00-fluxo-<pt|en|es>.webp`). Fontes em `docs/projetos/diagramas/imobi-arquitetura.html` e `imobi-fluxo.html`, traduções em `imobi-traducoes.py`.
- Depois vêm os prints de 23/10/2026 do painel rodando localmente (skill `dev-local`):
  1. `01-atendimento.webp`: conversa do agente com o imóvel do CRM, qualificação BANT e memória do lead;
  2. `02-fluxo-de-leads.webp`: pipeline com triagem da IA e leads qualificados;
  3. `03-relatorio.webp`: relatório de qualificação com indicadores;
  4. `04-imoveis-crm.webp`: catálogo do CRM consultado pelo agente;
  5. `05-configuracoes-ia.webp`: parâmetros da IA (contexto, imóveis por resposta, janela de agrupamento).
- **Dados de demonstração** no banco local: conversas de teste arquivadas, nomes fictícios e qualificação preenchida de forma coerente com os fatos de cada conversa (script em `logs/dev/backups/` do projeto não versionado; backup anterior em `imob-ai/logs/dev/backups/ia_imob_antes_demo_2026-10-23.dump`). Os imóveis são anúncios públicos do site da Líder.
- Telas que **não** entram na galeria: Usuários, Equipes, Plantão e Rotinas (mostram nomes e e-mails de corretores reais).
- Para novos prints: nunca usar conversas reais nem telas com nomes dos corretores; não rodar `send_mock_message.py`, porque o worker chama o CRM real e o outbox envia pelo WhatsApp.

## Pendências

- [ ] Se a Líder autorizar, citar números de uso (conversas atendidas, leads qualificados).
