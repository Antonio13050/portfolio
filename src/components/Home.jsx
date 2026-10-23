import Avatar from "../assets/avatar.png";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { RiDownloadLine, RiSparklingFill } from "react-icons/ri";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
    const { t } = useLanguage();

    return (
        <section
            name="home"
            className="min-h-screen w-full flex items-center justify-center relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 z-20"
        >
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
            <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Intro */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-xs font-semibold text-indigo-300 border border-indigo-500/20 shadow-inner">
                        <RiSparklingFill className="text-indigo-400 animate-pulse" />
                        <span>{t.home.badge}</span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-2">
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                            Antonio Carlos
                            <span className="block text-3xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent mt-2">
                                Virissimo
                            </span>
                        </h2>
                    </div>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
                        {t.home.subtitlePrefix} <strong className="text-white">Softplan</strong> {t.home.subtitleBody} <strong className="text-indigo-300">{t.home.aiGen}</strong>, <strong className="text-emerald-300">{t.home.javaSpring}</strong> {t.home.and} <strong className="text-blue-300">{t.home.nextReact}</strong>.
                    </p>

                    {/* Quick Highlight Pills */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                        <span className="px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                            {t.home.pills.softplan}
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
                            {t.home.pills.agents}
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                            {t.home.pills.java}
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                            {t.home.pills.spanish}
                        </span>
                    </div>

                    {/* CTA Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                        <a
                            href="https://wa.me/5548996458616"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-900/30 hover:shadow-emerald-700/50 transition-all hover:scale-105 w-full sm:w-auto"
                        >
                            <FaWhatsapp className="text-lg" />
                            {t.home.ctaTalk}
                        </a>

                        <a
                            href="/curriculo.pdf"
                            download="Curriculo-Antonio-Carlos-Virissimo.pdf"
                            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-300 glass-panel hover:text-white hover:border-zinc-600 transition-all hover:scale-105 w-full sm:w-auto"
                        >
                            <span>{t.home.ctaCv}</span>
                            <RiDownloadLine className="text-base" />
                        </a>

                        <div className="flex items-center gap-3 pt-2 sm:pt-0">
                            <a
                                href="https://github.com/Antonio13050/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl glass-panel text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all hover:scale-110"
                                title="GitHub"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/antonio13050/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl glass-panel text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110"
                                title="LinkedIn"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Avatar */}
                <div className="lg:col-span-5 flex items-center justify-center relative">
                    <div className="relative group">
                        {/* Gradient Aura */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                        
                        {/* Avatar Image Card */}
                        <div className="relative glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={Avatar}
                                alt="Antonio Carlos Virissimo"
                                className="w-64 sm:w-80 h-auto rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Floating Status Pill */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-xl flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-zinc-200">
                            <HiOutlineCommandLine className="text-indigo-400 text-sm" />
                            <span>{t.home.floatingBadge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
