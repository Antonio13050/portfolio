import { FaGithub, FaArrowUpRightFromSquare, FaLock } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ item }) {
    const { t, localize } = useLanguage();
    const title = localize(item.title);
    // "Nome — subtítulo": o nome vira o título do card e o resto, uma linha de apoio
    const [name, subtitle] = title.split(" — ");
    const cover = item.cover && new URL(`../assets/covers/${item.cover}`, import.meta.url).href;

    return (
        <article className="flex flex-col overflow-hidden rounded-[20px] border border-night-line bg-night-card/85 transition-colors hover:border-night-edge">
            {/* Capa: print do projeto ou, sem print, o fluxo principal da arquitetura */}
            {cover ? (
                <img
                    src={cover}
                    alt={title}
                    loading="lazy"
                    className="h-[180px] w-full border-b border-night-line object-cover object-top"
                />
            ) : (
                <div className="flex min-h-[180px] flex-col justify-end gap-1.5 border-b border-night-line bg-night-panel p-6">
                    <span className="text-xs uppercase tracking-[0.1em] text-mist-dim">
                        {localize(item.badgeText)}
                    </span>
                    <span
                        className={`font-display text-[26px] font-bold leading-tight ${
                            item.category === "Backend" ? "text-accent-blue" : "text-accent"
                        }`}
                    >
                        {item.flow}
                    </span>
                </div>
            )}

            <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold">{name}</h3>
                {subtitle && <p className="mt-1 text-sm font-medium text-mist-dim">{subtitle}</p>}
                <p className="mt-2.5 text-[15px] leading-relaxed text-mist">{localize(item.description)}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-mist-dim">{item.tags.join(" · ")}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                            <FaGithub />
                            {t.projects.github}
                        </a>
                    )}
                    {item.online && (
                        <a
                            href={item.online}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
                        >
                            <FaArrowUpRightFromSquare className="text-xs" />
                            {t.projects.live}
                        </a>
                    )}
                    {item.badgeType === "Enterprise" && (
                        <span className="inline-flex items-center gap-2 font-normal text-mist-dim">
                            <FaLock className="text-xs" />
                            {t.projects.enterprise}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}
