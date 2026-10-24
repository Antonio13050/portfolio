"""Gera as versões -en e -es de imobi-arquitetura.html e imobi-fluxo.html (rode nesta pasta)."""
import sys

base = sys.argv[1] if len(sys.argv) > 1 else "."

files = {
    "imobi-arquitetura": [
        ('<html lang="pt">', '<html lang="en">', '<html lang="es">'),
        ("<title>Imobi — arquitetura</title>", "<title>Imobi — architecture</title>", "<title>Imobi — arquitectura</title>"),
        ("Agente de IA para imobiliárias no WhatsApp", "AI agent for real estate agencies on WhatsApp", "Agente de IA para inmobiliarias en WhatsApp"),
        ("Mensagens de texto e de voz chegam pela API oficial da Meta.", "Text and voice messages arrive through Meta's official API.", "Mensajes de texto y de voz llegan por la API oficial de Meta."),
        ('<div class="label">Entrada</div>', '<div class="label">Inbound</div>', '<div class="label">Entrada</div>'),
        ("Agrupa mensagens seguidas e descarta repetidas.", "Groups consecutive messages and drops duplicates.", "Agrupa mensajes seguidos y descarta repetidos."),
        ('<div class="name">Agente de IA</div>', '<div class="name">AI agent</div>', '<div class="name">Agente de IA</div>'),
        ('<div class="name">Transcrição</div>', '<div class="name">Transcription</div>', '<div class="name">Transcripción</div>'),
        ("Áudios viram texto com Gemini antes do agente", "Voice notes become text with Gemini before the agent", "Los audios se vuelven texto con Gemini antes del agente"),
        ("Ciclo agente ↔ ferramentas até a resposta", "Agent ↔ tools loop until the answer", "Ciclo agente ↔ herramientas hasta la respuesta"),
        (">Buscar imóveis<", ">Search properties<", ">Buscar inmuebles<"),
        (">Imóvel por código<", ">Property by code<", ">Inmueble por código<"),
        (">Contratos<", ">Contracts<", ">Contratos<"),
        (">2ª via de boleto<", ">Payment slip copy<", ">2ª vía de boleto<"),
        (">Qualificar lead<", ">Qualify lead<", ">Calificar lead<"),
        (">Passar ao corretor<", ">Hand off to realtor<", ">Pasar al corredor<"),
        ("Memória do lead: o que ele já informou entra no contexto e o agente não repete perguntas.", "Lead memory: what the lead already said goes into the context, so the agent doesn't ask again.", "Memoria del lead: lo que ya informó entra en el contexto y el agente no repite preguntas."),
        ("Imóveis, contratos e boletos consultados em tempo real.", "Properties, contracts and payment slips looked up in real time.", "Inmuebles, contratos y boletos consultados en tiempo real."),
        ('<div class="label">Corretor</div>', '<div class="label">Realtor</div>', '<div class="label">Corredor</div>'),
        ('<div class="name">Painel · PWA</div>', '<div class="name">Dashboard · PWA</div>', '<div class="name">Panel · PWA</div>'),
        ("Notificação no celular e conversa assumida em tempo real.", "Phone notification and real-time takeover of the conversation.", "Notificación en el celular y conversación asumida en tiempo real."),
        ('<div class="label">Resposta</div>', '<div class="label">Reply</div>', '<div class="label">Respuesta</div>'),
        ("Envio garantido ao WhatsApp, com listas de imóveis paginadas.", "Guaranteed delivery to WhatsApp, with paginated property lists.", "Envío garantizado a WhatsApp, con listas de inmuebles paginadas."),
        (">resposta ao lead<", ">reply to the lead<", ">respuesta al lead<"),
        ("Diagrama ilustrativo da arquitetura", "Illustrative architecture diagram", "Diagrama ilustrativo de la arquitectura"),
    ],
    "imobi-fluxo": [
        ('<html lang="pt">', '<html lang="en">', '<html lang="es">'),
        ("<title>Imobi — fluxo</title>", "<title>Imobi — flow</title>", "<title>Imobi — flujo</title>"),
        ("Agente de IA para imobiliárias no WhatsApp", "AI agent for real estate agencies on WhatsApp", "Agente de IA para inmobiliarias en WhatsApp"),
        ("<h2>Lead no WhatsApp</h2>", "<h2>Lead on WhatsApp</h2>", "<h2>Lead en WhatsApp</h2>"),
        ("Pergunta por texto ou áudio, a qualquer hora.", "Asks by text or voice, at any time.", "Pregunta por texto o audio, a cualquier hora."),
        ("<h2>Agente de IA</h2>", "<h2>AI agent</h2>", "<h2>Agente de IA</h2>"),
        ("Busca imóveis e contratos no CRM, qualifica o lead e lembra o que ele já disse.", "Looks up properties and contracts in the CRM, qualifies the lead and remembers what it already said.", "Busca inmuebles y contratos en el CRM, califica al lead y recuerda lo que ya dijo."),
        ("<h2>Corretor no celular</h2>", "<h2>Realtor on the phone</h2>", "<h2>Corredor en el celular</h2>"),
        ("Recebe a notificação e assume a conversa pelo painel.", "Gets notified and takes over the conversation in the dashboard.", "Recibe la notificación y asume la conversación en el panel."),
        ("<b>Em produção</b> na Líder Imóveis", "<b>In production</b> at Líder Imóveis", "<b>En producción</b> en Líder Imóveis"),
    ],
}

for name, pairs in files.items():
    src = open(f"{base}/{name}.html", encoding="utf-8").read()
    for idx, lang in ((1, "en"), (2, "es")):
        out = src
        for p in pairs:
            assert out.count(p[0]) == 1, (name, p[0])
            out = out.replace(p[0], p[idx])
        open(f"{base}/{name}-{lang}.html", "w", encoding="utf-8").write(out)
    print(name, "ok")
