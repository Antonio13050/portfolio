import { RiCpuLine } from "react-icons/ri";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";
import { aiSkillGroups, aiAssistedTools, coreSkillGroups } from "../data/skills";

const chip = "rounded-full px-3 py-1.5";

export default function Skills() {
    const { t, localize } = useLanguage();

    return (
        <section name="skills" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6">
            <SectionHeader eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.intro} />

            {/* IA em destaque: cada grupo mostra em quais projetos aparece */}
            <div className="rounded-3xl border border-accent bg-night-card/90 p-6 sm:p-8">
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                            <RiCpuLine className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-2xl font-bold sm:text-[26px]">{t.skills.aiTitle}</h3>
                    </div>
                    <span className="text-[13px] text-mist-dim">{t.skills.aiNote}</span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {aiSkillGroups.map((group) => (
                        <div key={group.id} className="flex flex-col rounded-2xl border border-night-line bg-night/60 p-5">
                            <h4 className="text-[15px] font-semibold">{localize(group.title)}</h4>
                            <p className="mb-3.5 mt-1.5 text-[13px] leading-relaxed text-mist-dim">
                                {localize(group.description)}
                            </p>
                            <ul className="flex flex-wrap gap-2 text-[13px]">
                                {group.primary.map((skill) => (
                                    <li key={localize(skill)} className={`${chip} bg-accent/15 text-[#FFD2B3]`}>
                                        {localize(skill)}
                                    </li>
                                ))}
                                {group.skills.map((skill) => (
                                    <li key={localize(skill)} className={`${chip} bg-night-chip text-mist-bright`}>
                                        {localize(skill)}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-auto pt-4 text-xs text-mist-dim">
                                {t.skills.usedIn}:{" "}
                                <span className="font-medium text-mist">{group.usedIn.join(" · ")}</span>
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-night-line pt-5 text-[13px]">
                    <span className="mr-1 text-mist-dim">{t.skills.aiAssisted}</span>
                    {aiAssistedTools.map((tool) => (
                        <span key={tool} className="rounded-full border border-night-edge px-3 py-1">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                {coreSkillGroups.map((group) => (
                    <div key={group.id} className="rounded-[20px] border border-night-line bg-night-card/85 p-6">
                        <h3 className="mb-3.5 font-display text-[17px] font-bold">{t.skills.groups[group.id]}</h3>
                        <ul className="flex flex-wrap gap-2 text-[13px]">
                            {group.skills.map((skill) => (
                                <li key={skill} className={`${chip} bg-night-chip text-mist-bright`}>
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
