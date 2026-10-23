# SIES — Integração estatística do Poder Judicial del Perú

> Ficha do projeto: a fonte das informações do card (`src/data/data.json`, projeto `id` 3). **Este repositório é público**: aqui fica só o que pode aparecer no portfólio. Nomes internos de bases, schemas, tabelas, repositórios, ambientes e documentos ficam em `docs/projetos/privado/sies-detalhes.md` (ignorado pelo git).
>
> **Fonte:** descrição enviada por Antonio em 23/10/2026. O código é corporativo e não está nesta máquina.

| | |
| --- | --- |
| Status | _(validar)_ em produção no Poder Judicial del Perú? |
| Tipo | Projeto corporativo da Softplan para o Poder Judicial del Perú |
| Código | Repositório corporativo, não pode ser linkado |
| Componentes | Serviço Java (`sies-api`), painel web de operação e scripts de banco |

## Em uma frase

Integra o sistema de expedientes judiciais da Softplan, usado pelo Poder Judicial del Perú, ao sistema estatístico oficial do Judiciário peruano, cobrindo 7 especialidades.

## Como funciona

1. Cada movimento gravado no sistema de expedientes dispara uma **trigger PL/pgSQL** que registra o evento numa fila de captura de mudanças (CDC).
2. O serviço lê essa fila **por polling**, com marca por linha, e **enriquece** cada evento com tabelas de mapeamento (tipo de movimento → ato processual → variável estatística), mantidas em cache.
3. Os dados são **transformados** conforme as regras estatísticas oficiais e **gravados com garantia exactly-once** nas tabelas estatísticas de destino, usando uma tabela de controle (não há transação distribuída entre as duas bases).
4. Jobs agendados fazem o **fechamento mensal** do período anterior e o **inventário anual**.
5. A área de estatística pode pedir **reaberturas formais** pela API, com motivo e documento auditados. Recálculos dentro do mês anterior são automáticos.
6. O ETL institucional do Judiciário consome as tabelas estatísticas.

## Destaques técnicos

- Acesso a banco com **Spring JDBC puro** (sem JPA), em **5 pools** separados, cada um com credencial própria.
- **Triggers PL/pgSQL** para a captura de mudanças e para auditar as edições das tabelas de mapeamento.
- Testes de integração com **Testcontainers** contra PostgreSQL real, porque a lógica das triggers não é testável em banco em memória.
- Cache **Caffeine** das tabelas de mapeamento, com invalidação por versão e manual pela API.
- API protegida por **JWT do Keycloak**: o usuário de cada pedido vem sempre do token.
- Observabilidade com **Actuator** (atraso da fila, últimos fechamentos, eventos descartados) e **Elastic APM**.
- Painel de operação em **Next.js 16**: saúde do processamento, pausar e retomar jobs, reaberturas e reprocessamento de períodos.
- Captura por polling escolhida de propósito; CDC por streaming (Debezium) ficou isolado como evolução futura.

## Stack

- **Backend:** Java 21, Spring Boot 3.5, Spring JDBC, Spring Security (OAuth2 Resource Server), PostgreSQL, PL/pgSQL, Liquibase, Caffeine, springdoc-openapi
- **Frontend:** Next.js 16, React 19, TypeScript, NextAuth v5 + Keycloak
- **Qualidade:** JUnit 5, Mockito, Testcontainers, JaCoCo, SonarQube, Vitest, ESLint
- **Infra:** Docker, Kubernetes, GitLab CI/CD (SAST e dependency scanning), Elastic APM

## Imagens

- Sem prints que possam ser mostrados. A capa do card é um diagrama ilustrativo do fluxo, sem nomes internos: `docs/projetos/diagramas/sies.html` (pt) e `sies-traducoes.py` (gera en/es); imagens em `src/assets/projects/sies/01-arquitetura-<pt|en|es>.webp`.

## Pendências

- [ ] Confirmar status de produção.
