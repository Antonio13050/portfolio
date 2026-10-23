import { 
    HiOutlineSparkles,
    HiOutlineServerStack,
    HiOutlineCommandLine,
    HiOutlineCpuChip,
    HiOutlineWindow,
    HiOutlineShieldCheck,
    HiOutlineLockClosed
} from "react-icons/hi2";

import { 
    SiSpring, 
    SiSpringboot, 
    SiPostgresql, 
    SiRedis, 
    SiDocker, 
    SiKubernetes, 
    SiPython,
    SiTypescript, 
    SiReact, 
    SiNextdotjs, 
    SiTailwindcss, 
    SiGooglegemini,
    SiPrometheus, 
    SiOpentelemetry,
    SiGitlab
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";
import { RiRobot2Line, RiTerminalBoxLine } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
    const { t, localize } = useLanguage();

    const skillCategories = [
        {
            id: "ai",
            title: t.skills.categories.ai,
            icon: HiOutlineCpuChip,
            color: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30",
            iconColor: "text-indigo-400",
            skills: [
                { name: "LangGraph", level: { pt: "Multi-Agentes & Grafos", en: "Multi-Agents & Graphs", es: "Multiagentes & Grafos" }, icon: RiRobot2Line },
                { name: "Google Gemini", level: { pt: "Modelos & APIs", en: "Models & APIs", es: "Modelos & APIs" }, icon: SiGooglegemini },
                { name: "pgvector", level: { pt: "Busca Vetorial / RAG", en: "Vector Search / RAG", es: "Búsqueda Vectorial / RAG" }, icon: SiPostgresql },
                { name: "LangChain", level: "Tools & Chains", icon: RiRobot2Line },
                { name: "LiteLLM", level: "Provider Fallback", icon: RiRobot2Line },
                { name: "Prompt Engineering", level: "ReAct & Guardrails", icon: HiOutlineSparkles }
            ]
        },
        {
            id: "backend",
            title: t.skills.categories.backend,
            icon: HiOutlineServerStack,
            color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
            iconColor: "text-emerald-400",
            skills: [
                { name: "Java 21", level: { pt: "Avançado", en: "Advanced", es: "Avanzado" }, icon: FaJava },
                { name: "Spring Boot 3.5", level: { pt: "Microsserviços", en: "Microservices", es: "Microservicios" }, icon: SiSpringboot },
                { name: "Spring JDBC / JPA", level: { pt: "Alta Performance", en: "High Performance", es: "Alto Rendimiento" }, icon: SiSpring },
                { name: "Python 3.12", level: "FastAPI Async", icon: SiPython },
                { name: "PostgreSQL", level: { pt: "Modelagem & CDC", en: "Data Modeling & CDC", es: "Modelado & CDC" }, icon: SiPostgresql },
                { name: "Redis", level: { pt: "Cache & Memória", en: "Caching & Memory", es: "Caché & Memoria" }, icon: SiRedis },
                { name: "Keycloak (OIDC)", level: { pt: "Autenticação Segura", en: "Secure Authentication", es: "Autenticación Segura" }, icon: HiOutlineLockClosed },
                { name: "Docker", level: { pt: "Containerização", en: "Containerization", es: "Contenerización" }, icon: SiDocker }
            ]
        },
        {
            id: "frontend",
            title: t.skills.categories.frontend,
            icon: HiOutlineWindow,
            color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
            iconColor: "text-blue-400",
            skills: [
                { name: "Next.js 16", level: "App Router & SSR", icon: SiNextdotjs },
                { name: "React 19", level: { pt: "Hooks & Componentes", en: "Hooks & Components", es: "Hooks & Componentes" }, icon: SiReact },
                { name: "TypeScript", level: { pt: "Tipagem Estática", en: "Static Typing", es: "Tipado Estático" }, icon: SiTypescript },
                { name: "Tailwind CSS v4", level: "Design System", icon: SiTailwindcss },
                { name: "SSE Streaming", level: "Realtime Chat", icon: HiOutlineCommandLine },
                { name: "Recharts", level: { pt: "Dashboards Dinâmicos", en: "Dynamic Dashboards", es: "Dashboards Dinámicos" }, icon: HiOutlineSparkles }
            ]
        },
        {
            id: "ai-tools",
            title: t.skills.categories.aiTools,
            icon: RiTerminalBoxLine,
            color: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
            iconColor: "text-purple-400",
            skills: [
                { name: "Google Antigravity", level: { pt: "Orquestração & CLI", en: "Orchestration & CLI", es: "Orquestación & CLI" }, icon: RiRobot2Line },
                { name: "Claude Code", level: { pt: "Refatoração Inteligente", en: "Smart Refactoring", es: "Refactorización Inteligente" }, icon: RiTerminalBoxLine },
                { name: "Windsurf (Codeium)", level: { pt: "Fluxos Agênticos", en: "Agentic Workflows", es: "Flujos Agénticos" }, icon: HiOutlineCommandLine },
                { name: "OpenCode", level: { pt: "Geração Assistida", en: "Assisted Generation", es: "Generación Asistida" }, icon: RiRobot2Line },
                { name: "KiloCode", level: { pt: "Code Review com IA", en: "AI Code Review", es: "Code Review con IA" }, icon: RiRobot2Line }
            ]
        },
        {
            id: "devops",
            title: t.skills.categories.devops,
            icon: HiOutlineShieldCheck,
            color: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
            iconColor: "text-amber-400",
            skills: [
                { name: "OpenTelemetry & Jaeger", level: "Distributed Tracing", icon: SiOpentelemetry },
                { name: "Prometheus & Grafana", level: { pt: "Métricas & Dashboards", en: "Metrics & Dashboards", es: "Métricas & Dashboards" }, icon: SiPrometheus },
                { name: "Kubernetes / K8s", level: { pt: "Orquestração", en: "Orchestration", es: "Orquestación" }, icon: SiKubernetes },
                { name: "Testcontainers", level: { pt: "Testes Reais com PG", en: "Integration Tests with Real PG", es: "Pruebas Reales con PG" }, icon: SiDocker },
                { name: "GitLab CI/CD", level: "Pipelines & SAST", icon: SiGitlab },
                { name: "Clean Code & SOLID", level: { pt: "Padrões de Projeto", en: "Design Patterns", es: "Patrones de Diseño" }, icon: HiOutlineShieldCheck }
            ]
        }
    ];

    return (
        <section name="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-20 relative">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-300 border border-indigo-500/20 mb-4">
                    <HiOutlineSparkles className="text-indigo-400" />
                    {t.skills.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {t.skills.title}
                </h2>
                <p className="text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base">
                    {t.skills.subtitle}
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => {
                    const CategoryIcon = category.icon;
                    return (
                        <div
                            key={category.id}
                            className={`glass-panel rounded-3xl p-6 sm:p-7 border bg-gradient-to-b ${category.color} flex flex-col justify-between hover:scale-[1.02] transition-all duration-300`}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 rounded-2xl bg-zinc-950/80 border border-white/10 ${category.iconColor}`}>
                                        <CategoryIcon className="text-2xl" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-2.5">
                                    {category.skills.map((skill, idx) => {
                                        const SkillIcon = skill.icon;
                                        return (
                                            <div
                                                key={idx}
                                                className="p-3 rounded-2xl bg-zinc-950/70 border border-white/5 hover:border-white/15 transition-all flex flex-col gap-1 group"
                                            >
                                                <div className="flex items-center gap-2 text-zinc-300 group-hover:text-white transition-colors">
                                                    <SkillIcon className={`text-base ${category.iconColor}`} />
                                                    <span className="text-xs font-semibold truncate">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <span className="text-[10px] text-zinc-400 font-medium">
                                                    {localize(skill.level)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
