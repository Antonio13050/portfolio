import data from "../data/data.json";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

const { projects } = data;

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <section name="projects" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6">
            <SectionHeader eyebrow={t.projects.eyebrow} title={t.projects.title} />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
