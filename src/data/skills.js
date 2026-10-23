// Competências: grupos de IA (com os projetos onde cada um aparece) e a base técnica.
// Textos em { pt, en, es } são resolvidos com localize(); nomes de tecnologias ficam iguais.

const L = (pt, en, es) => ({ pt, en, es });

export const aiSkillGroups = [
    {
        id: "agents",
        title: L("Agentes e orquestração", "Agents & orchestration", "Agentes y orquestación"),
        description: L(
            "Pipelines multi-agente, agentes ReAct e ferramentas ligadas a bancos e CRMs.",
            "Multi-agent pipelines, ReAct agents and tools connected to databases and CRMs.",
            "Pipelines multiagente, agentes ReAct y herramientas conectadas a bases de datos y CRMs."
        ),
        primary: ["LangGraph", "LangChain"],
        skills: [L("Multi-agentes", "Multi-agent", "Multiagentes"), "ReAct", "Tool calling"],
        usedIn: ["Insights AI", "Imobi"],
    },
    {
        id: "models",
        title: L("Modelos e provedores", "Models & providers", "Modelos y proveedores"),
        description: L(
            "Camada única para LLMs, troca automática de modelo e saída estruturada em JSON.",
            "A single layer for LLMs, automatic model fallback and structured JSON output.",
            "Capa única para LLMs, cambio automático de modelo y salida estructurada en JSON."
        ),
        primary: ["LiteLLM", "OpenRouter"],
        skills: [
            "Google Gemini",
            L("Fallback de modelos", "Model fallback", "Fallback de modelos"),
            L("Saída em JSON", "JSON output", "Salida en JSON"),
        ],
        usedIn: ["Insights AI", "Imobi", "Attos"],
    },
    {
        id: "multimodal",
        title: L("Multimodal e memória", "Multimodal & memory", "Multimodal y memoria"),
        description: L(
            "Leitura de imagens e áudio, e contexto que acompanha o usuário entre conversas.",
            "Reading images and audio, and context that follows the user across conversations.",
            "Lectura de imágenes y audio, y contexto que acompaña al usuario entre conversaciones."
        ),
        primary: [
            L("Visão (OCR de fichas)", "Vision (OCR)", "Visión (OCR)"),
            L("Transcrição de áudio", "Audio transcription", "Transcripción de audio"),
        ],
        skills: [
            L("Memória de conversa", "Conversation memory", "Memoria de conversación"),
            L("Fatos do usuário", "User facts", "Hechos del usuario"),
        ],
        usedIn: ["Attos", "Imobi", "Insights AI"],
    },
    {
        id: "production",
        title: L("IA em produção", "AI in production", "IA en producción"),
        description: L(
            "Respostas em tempo real, limites de escopo, custos sob controle e rastreio de cada chamada.",
            "Real-time answers, scope limits, controlled costs and tracing of every call.",
            "Respuestas en tiempo real, límites de alcance, costos bajo control y trazabilidad de cada llamada."
        ),
        primary: ["Streaming SSE", "LangSmith"],
        skills: ["Guardrails", L("Cotas por usuário", "Per-user quotas", "Cuotas por usuario"), "OpenTelemetry"],
        usedIn: ["Insights AI", "Attos", "Imobi"],
    },
];

export const aiAssistedTools = ["Claude Code", "Google Antigravity", "Windsurf", "OpenCode"];

export const coreSkillGroups = [
    {
        id: "backend",
        skills: ["Java 21", "Spring Boot 3.5", "Python · FastAPI", "PostgreSQL · PL/pgSQL", "Redis", "CDC", "Keycloak"],
    },
    {
        id: "frontend",
        skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Capacitor", "PWA · Web Push"],
    },
    {
        id: "infra",
        skills: [
            "Docker",
            "Kubernetes",
            "Cloudflare Workers",
            "GitLab CI · GitHub Actions",
            "Testcontainers",
            "Prometheus · Grafana",
        ],
    },
];
