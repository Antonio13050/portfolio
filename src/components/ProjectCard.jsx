import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { HiOutlineSparkles, HiOutlineCheckCircle } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectCard({ item }) {
    const { t, localize } = useLanguage();
    const highlights = localize(item.highlights);
    const cover = item.cover && new URL(`../assets/covers/${item.cover}`, import.meta.url).href;
    const isAI = item.category === "IA";
    const isEnterprise = item.badgeType === "Enterprise";

    return (
        <div className="glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-indigo-500/40 transition-all duration-300 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)] relative overflow-hidden">
            {/* Top Glow on hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 group-hover:bg-indigo-500/15 rounded-full blur-2xl transition-all pointer-events-none"></div>

            <div>
                {/* Cover screenshot (if available) */}
                {cover && (
                    <div className="mb-5 aspect-video overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950">
                        <img
                            src={cover}
                            alt={localize(item.title)}
                            loading="lazy"
                            className="h-full w-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                        />
                    </div>
                )}

                {/* Header: Category and Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            isAI
                                ? "bg-indigo-950/70 text-indigo-300 border border-indigo-800/60"
                                : item.category === "Backend"
                                ? "bg-emerald-950/70 text-emerald-300 border border-emerald-800/60"
                                : item.category === "Fullstack"
                                ? "bg-purple-950/70 text-purple-300 border border-purple-800/60"
                                : "bg-blue-950/70 text-blue-300 border border-blue-800/60"
                        }`}
                    >
                        {isAI && <HiOutlineSparkles className="text-indigo-400 text-xs" />}
                        {isAI ? t.portfolio.card.aiCategory : item.category}
                    </span>

                    {item.badgeText && (
                        <span
                            className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${
                                item.badgeType === "Enterprise"
                                    ? "bg-amber-950/40 text-amber-300 border-amber-800/40"
                                    : item.badgeType === "LiveDemo"
                                    ? "bg-emerald-950/40 text-emerald-300 border-emerald-800/40 flex items-center gap-1"
                                    : "bg-zinc-800/80 text-zinc-300 border-zinc-700/60"
                            }`}
                        >
                            {item.badgeType === "LiveDemo" && (
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            )}
                            {localize(item.badgeText)}
                        </span>
                    )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-3 leading-snug">
                    {localize(item.title)}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-4">
                    {localize(item.description)}
                </p>

                {/* Highlights (if available) */}
                {highlights && highlights.length > 0 && (
                    <div className="mb-5 p-3 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 space-y-1.5">
                        {highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                                <HiOutlineCheckCircle className="text-indigo-400 text-sm shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-white/5">
                    {item.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Actions / Links */}
                <div className="flex items-center gap-3 pt-2">
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 hover:border-zinc-500 transition-all hover:scale-105"
                        >
                            <FaGithub className="text-sm" />
                            <span>{t.portfolio.card.github}</span>
                        </a>
                    )}

                    {item.online && (
                        <a
                            href={item.online}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-800/60 hover:border-emerald-600 transition-all hover:scale-105"
                        >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>{t.portfolio.card.live}</span>
                        </a>
                    )}

                    {isEnterprise && (
                        <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium italic">
                            <FaLock className="text-[10px]" />
                            {t.portfolio.card.enterprise}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
