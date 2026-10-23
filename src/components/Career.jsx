import { useState } from "react";
import data from "../data/data.json";
import Modal from "./Modal";
import CareerCard from "./CareerCard";
import { HiOutlineBriefcase, HiOutlineAcademicCap, HiOutlineSparkles } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

const { career, education } = data;

export default function Career() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeTab, setActiveTab] = useState("all");
    const { t, localize } = useLanguage();

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    return (
        <section name="career" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-20 relative">
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-12">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-semibold text-indigo-300 border border-indigo-500/20 mb-4">
                    <HiOutlineSparkles className="text-indigo-400" />
                    {t.career.badge}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {t.career.title}
                </h2>
                <p className="text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base">
                    {t.career.subtitle}
                </p>
            </div>

            {/* Tab Selector */}
            <div className="flex items-center justify-center gap-3 mb-12">
                <button
                    onClick={() => setActiveTab("all")}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        activeTab === "all"
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                            : "glass-panel text-zinc-400 hover:text-white"
                    }`}
                >
                    {t.career.tabs.all}
                </button>
                <button
                    onClick={() => setActiveTab("career")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        activeTab === "career"
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                            : "glass-panel text-zinc-400 hover:text-white"
                    }`}
                >
                    <HiOutlineBriefcase className="text-base" />
                    {t.career.tabs.career}
                </button>
                <button
                    onClick={() => setActiveTab("education")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        activeTab === "education"
                            ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                            : "glass-panel text-zinc-400 hover:text-white"
                    }`}
                >
                    <HiOutlineAcademicCap className="text-base" />
                    {t.career.tabs.education}
                </button>
            </div>

            {/* Timeline Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Professional Column */}
                {(activeTab === "all" || activeTab === "career") && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                <HiOutlineBriefcase className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t.career.secCareer}</h3>
                        </div>

                        <div className="space-y-4">
                            {career.map((item) => (
                                <CareerCard
                                    key={item.id}
                                    item={item}
                                    handleShowModal={handleShowModal}
                                    type="career"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Academic Column */}
                {(activeTab === "all" || activeTab === "education") && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-6 pb-3 border-b border-zinc-800">
                            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                <HiOutlineAcademicCap className="text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white">{t.career.secEdu}</h3>
                        </div>

                        <div className="space-y-4">
                            {education.map((item) => (
                                <CareerCard
                                    key={item.id}
                                    item={item}
                                    handleShowModal={handleShowModal}
                                    type="education"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={localize(selectedItem?.title)}
                details={localize(selectedItem?.details) || [localize(selectedItem?.description)]}
            />
        </section>
    );
}
