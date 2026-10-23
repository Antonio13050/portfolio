import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const skillGroups = [
    { id: "ai", skills: ["LangGraph", "LangChain", "Google Gemini", "pgvector", "LiteLLM"] },
    { id: "backend", skills: ["Java 21", "Spring Boot 3.5", "Python · FastAPI", "PostgreSQL", "Redis", "Keycloak"] },
    { id: "frontend", skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Recharts"] },
    {
        id: "infra",
        skills: ["Docker", "Kubernetes", "OpenTelemetry", "Prometheus · Grafana", "GitLab CI/CD", "Testcontainers"],
    },
];

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section name="skills" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6">
            <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title} />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group) => (
                    <div key={group.id} className="rounded-[20px] border border-night-line bg-night-card/85 p-6">
                        <h3 className="mb-4 font-display text-lg font-bold">{t.skills.groups[group.id]}</h3>
                        <ul className="flex flex-wrap gap-2 text-[13px]">
                            {group.skills.map((skill) => (
                                <li key={skill} className="rounded-full bg-night-chip px-3 py-1.5 text-mist-bright">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
