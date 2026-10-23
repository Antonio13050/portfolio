import { useState } from "react";
import data from "../data/data.json";
import ProjectCard from "./ProjectCard";
import { 
    HiOutlineFolderOpen, 
    HiOutlineSparkles,
    HiOutlineCube,
    HiOutlineServerStack,
    HiOutlineWindow,
    HiOutlineSquares2X2
} from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

const { projects } = data;

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const { t } = useLanguage();

    const categories = [
        { id: "all", label: t.portfolio.categories.all, icon: HiOutlineSquares2X2 },
        { id: "IA", label: t.portfolio.categories.IA, icon: HiOutlineSparkles },
        { id: "Backend", label: t.portfolio.categories.Backend, icon: HiOutlineServerStack },
        { id: "Fullstack", label: t.portfolio.categories.Fullstack, icon: HiOutlineCube },
        { id: "Frontend", label: t.portfolio.categories.Frontend, icon: HiOutlineWindow },
    ];

    const filteredProjects = selectedCategory === "all"
        ? projects
        : projects.filter((project) => project.category === selectedCategory);

    return (
        <section name="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-20 relative">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-12">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-300 border border-indigo-500/20 mb-4">
                    <HiOutlineFolderOpen className="text-indigo-400" />
                    {t.portfolio.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {t.portfolio.title}
                </h2>
                <p className="text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base">
                    {t.portfolio.subtitle}
                </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = selectedCategory === cat.id;
                    const count = cat.id === "all" 
                        ? projects.length 
                        : projects.filter(p => p.category === cat.id).length;

                    return (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                isSelected
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105 border border-indigo-400/50"
                                    : "glass-panel text-zinc-400 hover:text-white hover:border-zinc-700"
                            }`}
                        >
                            <Icon className={`text-base ${isSelected ? "text-white" : "text-zinc-400"}`} />
                            <span>{cat.label}</span>
                            <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                    isSelected
                                        ? "bg-white/20 text-white"
                                        : "bg-zinc-800 text-zinc-400"
                                }`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}
