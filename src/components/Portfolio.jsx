import data from "../data/data.json";
import ProjectShowcase from "./ProjectShowcase";
import OtherProjectCard from "./OtherProjectCard";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const featured = data.projects.filter((project) => project.featured);
const others = data.projects.filter((project) => !project.featured);

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section name="projects" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6">
            <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} />

            {featured.map((item, position) => (
                <ProjectShowcase key={item.id} item={item} position={position} />
            ))}

            <h3 className="mb-4 mt-12 text-[13px] font-semibold uppercase tracking-[0.1em] text-mist-dim">
                {t.projects.others}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {others.map((item) => (
                    <OtherProjectCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
