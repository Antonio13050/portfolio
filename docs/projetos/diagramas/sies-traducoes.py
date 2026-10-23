"""Gera sies-en.html e sies-es.html a partir de sies.html (rode nesta pasta)."""
import sys

base = sys.argv[1] if len(sys.argv) > 1 else "."
src = open(f"{base}/sies.html", encoding="utf-8").read()

pairs = [
    ('<html lang="pt">', '<html lang="en">', '<html lang="es">'),
    ("<title>SIES — arquitetura</title>", "<title>SIES — architecture</title>", "<title>SIES — arquitectura</title>"),
    ("Integração estatística · Poder Judicial del Perú", "Statistical integration · Peru's Judiciary", "Integración estadística · Poder Judicial del Perú"),
    ('<div class="label">Origem</div>', '<div class="label">Source</div>', '<div class="label">Origen</div>'),
    ("Expedientes judiciais", "Case management", "Expedientes judiciales"),
    ("Sistema da Softplan usado pelo Judiciário peruano, em PostgreSQL. 7 especialidades.", "Softplan system used by Peru's Judiciary, on PostgreSQL. 7 specialties.", "Sistema de Softplan usado por el Poder Judicial peruano, en PostgreSQL. 7 especialidades."),
    ('<div class="label">Captura de mudanças</div>', '<div class="label">Change data capture</div>', '<div class="label">Captura de cambios</div>'),
    ("Cada movimento gravado entra numa fila de CDC.", "Every recorded case event enters a CDC queue.", "Cada movimiento registrado entra en una cola de CDC."),
    (">fila CDC<", ">CDC queue<", ">cola CDC<"),
    ('<div class="label">Serviço</div>', '<div class="label">Service</div>', '<div class="label">Servicio</div>'),
    ("Pipeline de integração", "Integration pipeline", "Pipeline de integración"),
    ("Lê a fila em lotes, com marca por linha", "Reads the queue in batches, marking each row", "Lee la cola por lotes, con marca por fila"),
    ('<div class="name">Mapeamento</div>', '<div class="name">Mapping</div>', '<div class="name">Mapeo</div>'),
    ("Movimento → ato processual → variável estatística", "Case event → procedural act → statistical variable", "Movimiento → acto procesal → variable estadística"),
    ('<div class="name">Regras</div>', '<div class="name">Rules</div>', '<div class="name">Reglas</div>'),
    ("Aplica as regras estatísticas oficiais", "Applies the official statistical rules", "Aplica las reglas estadísticas oficiales"),
    ('<div class="name">Escrita</div>', '<div class="name">Write</div>', '<div class="name">Escritura</div>'),
    ("Exactly-once com tabela de controle", "Exactly-once with a control table", "Exactly-once con tabla de control"),
    ("Jobs agendados", "Scheduled jobs", "Jobs programados"),
    ("<b>Fechamento mensal</b>", "<b>Monthly close</b>", "<b>Cierre mensual</b>"),
    ("<b>Inventário anual</b>", "<b>Annual inventory</b>", "<b>Inventario anual</b>"),
    ("<b>Reaberturas</b> auditadas", "<b>Audited</b> reopenings", "<b>Reaperturas</b> auditadas"),
    (">Engenharia<", ">Engineering<", ">Ingeniería<"),
    ("Spring JDBC puro · 5 pools", "Plain Spring JDBC · 5 pools", "Spring JDBC puro · 5 pools"),
    ("Cache Caffeine", "Caffeine cache", "Caché Caffeine"),
    ('<div class="label">Destino</div>', '<div class="label">Target</div>', '<div class="label">Destino</div>'),
    ("Base estatística", "Statistics database", "Base estadística"),
    ("6 tabelas estatísticas oficiais", "6 official statistical tables", "6 tablas estadísticas oficiales"),
    ('<div class="label">Consumo</div>', '<div class="label">Consumer</div>', '<div class="label">Consumo</div>'),
    ("ETL do Judiciário", "Judiciary ETL", "ETL del Poder Judicial"),
    ("Sistema estatístico oficial do Poder Judicial", "Official statistics system of the Judiciary", "Sistema estadístico oficial del Poder Judicial"),
    ('<div class="label">Operação</div>', '<div class="label">Operations</div>', '<div class="label">Operación</div>'),
    ("Painel · Next.js 16", "Dashboard · Next.js 16", "Panel · Next.js 16"),
    ("Saúde, pausar jobs, reaberturas e reprocessamento", "Health, pausing jobs, reopenings and reprocessing", "Salud, pausar jobs, reaperturas y reprocesamiento"),
    ('<div class="label">Identidade</div>', '<div class="label">Identity</div>', '<div class="label">Identidad</div>'),
    ("API protegida por JWT", "JWT-protected API", "API protegida por JWT"),
    ("Diagrama ilustrativo da arquitetura · sem dados do sistema", "Illustrative architecture diagram · no system data", "Diagrama ilustrativo de la arquitectura · sin datos del sistema"),
]

for idx, lang in ((1, "en"), (2, "es")):
    out = src
    for p in pairs:
        assert out.count(p[0]) == 1, p[0]
        out = out.replace(p[0], p[idx])
    open(f"{base}/sies-{lang}.html", "w", encoding="utf-8").write(out)
    print(lang, "ok")
