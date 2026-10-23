import sys

base = sys.argv[1]
src = open(f"{base}/insights-ai.html", encoding="utf-8").read()

pairs = [
    ('<html lang="pt">', '<html lang="en">', '<html lang="es">'),
    ("Arquitetura do BI conversacional para tribunais", "Conversational BI for courts: architecture", "Arquitectura del BI para tribunales"),
    ("Chat com assistant-ui: respostas em streaming, histórico de conversas e Markdown.", "Chat with assistant-ui: streaming answers, conversation history and Markdown.", "Chat con assistant-ui: respuestas en streaming, historial de conversaciones y Markdown."),
    ("Dashboard de métricas com Recharts.", "Metrics dashboard with Recharts.", "Panel de métricas con Recharts."),
    ("API routes como proxy autenticado.", "API routes as an authenticated proxy.", "API routes como proxy autenticado."),
    ('<div class="label">Identidade</div>', '<div class="label">Identity</div>', '<div class="label">Identidad</div>'),
    ("Login com next-auth; o JWT segue para a API e é validado lá.", "Login with next-auth; the JWT goes to the API and is validated there.", "Login con next-auth; el JWT sigue a la API y se valida allí."),
    ("Sistema multi-agente · LangGraph", "Multi-agent system · LangGraph", "Sistema multiagente · LangGraph"),
    ("Confere o escopo da pergunta", "Checks the question's scope", "Verifica el alcance de la pregunta"),
    ("Escolhe o especialista certo", "Picks the right specialist", "Elige el especialista"),
    ("Consultam os indicadores", "Query the indicators", "Consultan los indicadores"),
    ("Monta a resposta final", "Builds the final answer", "Arma la respuesta final"),
    ("<b>9 tools SQL</b> · indicadores do CNJ", "<b>9 SQL tools</b> · CNJ indicators", "<b>9 tools SQL</b> · indicadores del CNJ"),
    ("<b>Produtividade</b> · agente ReAct", "<b>Productivity</b> · ReAct agent", "<b>Productividad</b> · agente ReAct"),
    ("Nomes de magistrados reconhecidos mesmo com grafia aproximada", "Judges' names recognized even when misspelled", "Nombres de magistrados reconocidos aun con grafía aproximada"),
    (">Resiliência<", ">Resilience<", ">Resiliencia<"),
    ("Retries com backoff", "Retries with backoff", "Reintentos con backoff"),
    ("Testes com meta de mais de 90% de cobertura", "Tests targeting over 90% coverage", "Pruebas con meta de más del 90% de cobertura"),
    ('<div class="label">Modelos</div>', '<div class="label">Models</div>', '<div class="label">Modelos</div>'),
    ("Camada única para os LLMs", "Single layer for the LLMs", "Capa única para los LLM"),
    ('<div class="label">Dados</div>', '<div class="label">Data</div>', '<div class="label">Datos</div>'),
    ("Pools de leitura e de escrita", "Separate read and write pools", "Pools de lectura y de escritura"),
    ('<div class="label">Cache e memória</div>', '<div class="label">Cache &amp; memory</div>', '<div class="label">Caché y memoria</div>'),
    ("Cache de consultas e estado das conversas", "Query cache and conversation state", "Caché de consultas y estado de las conversaciones"),
    ('<div class="label">Observabilidade</div>', '<div class="label">Observability</div>', '<div class="label">Observabilidad</div>'),
    ("Tracing de cada chamada de LLM", "Tracing of every LLM call", "Tracing de cada llamada al LLM"),
    ("Diagrama ilustrativo da arquitetura · sem dados do sistema", "Illustrative architecture diagram · no system data", "Diagrama ilustrativo de la arquitectura · sin datos del sistema"),
    ("<title>Insights AI — arquitetura</title>", "<title>Insights AI — architecture</title>", "<title>Insights AI — arquitectura</title>"),
]

for idx, lang in ((1, "en"), (2, "es")):
    out = src
    for p in pairs:
        assert out.count(p[0]) == 1, p[0]
        out = out.replace(p[0], p[idx])
    open(f"{base}/insights-ai-{lang}.html", "w", encoding="utf-8").write(out)
    print(lang, "ok")
