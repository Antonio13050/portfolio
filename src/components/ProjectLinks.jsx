import { FaGithub, FaArrowUpRightFromSquare, FaGlobe, FaLock } from "react-icons/fa6";
import { useLanguage } from "../context/LanguageContext";

// Links do projeto (repositório, demo, site) ou o aviso de código privado/corporativo
export default function ProjectLinks({ item }) {
    const { t } = useLanguage();

    return (
        <>
            {item.link && (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
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
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                    <FaArrowUpRightFromSquare className="text-xs" />
                    {t.projects.live}
                </a>
            )}
            {item.site && (
                <a
                    href={item.site}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
                >
                    <FaGlobe className="text-xs" />
                    {t.projects.site}
                </a>
            )}
            {(item.badgeType === "Enterprise" || item.private) && (
                <span className="inline-flex items-center gap-2 text-sm text-mist-dim">
                    <FaLock className="text-xs" />
                    {item.badgeType === "Enterprise" ? t.projects.enterprise : t.projects.private}
                </span>
            )}
        </>
    );
}
