import HeroImage from "../assets/hero.jpg";
import { 
    HiOutlineAcademicCap, 
    HiOutlineBriefcase, 
    HiOutlineGlobeAlt, 
    HiOutlineSparkles 
} from "react-icons/hi2";
import { RiRobot2Line } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section name="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-20 relative">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-300 border border-indigo-500/20 mb-4">
                    <HiOutlineSparkles className="text-indigo-400" />
                    {t.about.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {t.about.title}
                </h2>
                <p className="text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base">
                    {t.about.subtitle}
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Main Profile Card (2 cols) */}
                <div className="md:col-span-2 lg:col-span-2 glass-panel rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src={HeroImage}
                            alt="Antonio Carlos"
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/30 shadow-md"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-white">Antonio Carlos Virissimo</h3>
                            <p className="text-sm font-medium text-indigo-400">{t.about.role}</p>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm text-zinc-300 leading-relaxed">
                        <p>{t.about.bio1}</p>
                        <p>{t.about.bio2}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 text-xs">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 font-medium">
                            LangGraph & GenAI
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-emerald-950/50 border border-emerald-800/40 text-emerald-300 font-medium">
                            Java 21 & Spring Boot
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-blue-950/50 border border-blue-800/40 text-blue-300 font-medium">
                            Next.js 16 & React 19
                        </span>
                    </div>
                </div>

                {/* Softplan Career Evolution Card */}
                <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors">
                    <div>
                        <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-4 border border-emerald-500/20">
                            <HiOutlineBriefcase className="text-2xl" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{t.about.careerCard.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            {t.about.careerCard.subtitle}
                        </p>
                        <ul className="space-y-2 text-xs text-zinc-300">
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                <strong className="text-white">{t.about.careerCard.r1}</strong> {t.about.careerCard.d1}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
                                <span>{t.about.careerCard.r2}</span> {t.about.careerCard.d2}
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
                                <span>{t.about.careerCard.r3}</span> {t.about.careerCard.d3}
                            </li>
                        </ul>
                    </div>
                    <span className="mt-4 text-xs font-semibold text-emerald-400">{t.about.careerCard.footer}</span>
                </div>

                {/* International & Languages Card */}
                <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
                    <div>
                        <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit mb-4 border border-blue-500/20">
                            <HiOutlineGlobeAlt className="text-2xl" />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{t.about.intlCard.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                            {t.about.intlCard.subtitle}
                        </p>
                        <div className="space-y-2 text-xs text-zinc-300">
                            <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800">
                                <strong className="text-white block">{t.about.intlCard.p1Title}</strong>
                                <span className="text-zinc-400">{t.about.intlCard.p1Desc}</span>
                            </div>
                            <div className="p-2 rounded-xl bg-zinc-900/60 border border-zinc-800">
                                <strong className="text-white block">{t.about.intlCard.p2Title}</strong>
                                <span className="text-zinc-400">{t.about.intlCard.p2Desc}</span>
                            </div>
                        </div>
                    </div>
                    <span className="mt-4 text-xs font-semibold text-blue-400">{t.about.intlCard.footer}</span>
                </div>

                {/* Education Card */}
                <div className="md:col-span-2 lg:col-span-2 glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit border border-purple-500/20">
                                <HiOutlineAcademicCap className="text-2xl" />
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300">
                                {t.about.eduCard.badge}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-3">{t.about.eduCard.title}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                                <strong className="text-white block font-semibold mb-1">{t.about.eduCard.f1Title}</strong>
                                <span className="text-zinc-400">{t.about.eduCard.f1Desc}</span>
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                                <strong className="text-white block font-semibold mb-1">{t.about.eduCard.f2Title}</strong>
                                <span className="text-zinc-400">{t.about.eduCard.f2Desc}</span>
                            </div>
                            <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                                <strong className="text-white block font-semibold mb-1">{t.about.eduCard.f3Title}</strong>
                                <span className="text-zinc-400">{t.about.eduCard.f3Desc}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI-Assisted Dev Card */}
                <div className="md:col-span-1 lg:col-span-2 glass-panel rounded-3xl p-6 flex flex-col justify-between group hover:border-indigo-500/30 transition-colors">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 w-fit border border-indigo-500/20">
                                <RiRobot2Line className="text-2xl" />
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-300">
                                {t.about.aiToolsCard.badge}
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{t.about.aiToolsCard.title}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                            {t.about.aiToolsCard.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                                Google Antigravity
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                                Claude Code
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                                Windsurf (Codeium)
                            </span>
                            <span className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                                OpenCode / KiloCode
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
