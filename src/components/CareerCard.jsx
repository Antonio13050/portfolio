import { HiOutlineArrowRight, HiOutlineCalendar } from "react-icons/hi2";
import { useLanguage } from "../context/LanguageContext";

export default function CareerCard({ item, handleShowModal, type }) {
    const { t, localize } = useLanguage();
    const isLatestCareer = type === "career" && item.id === 1;

    return (
        <div
            className={`glass-panel rounded-2xl p-6 flex flex-col justify-between group hover:border-zinc-600 transition-all duration-300 relative ${
                isLatestCareer ? "border-emerald-500/40 bg-emerald-950/10" : ""
            }`}
        >
            <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium">
                        <HiOutlineCalendar className="text-indigo-400 text-xs" />
                        {localize(item.dates)}
                    </span>
                    {isLatestCareer && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            {t.career.currentRole}
                        </span>
                    )}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {localize(item.title)}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                    {localize(item.description)}
                </p>
            </div>

            <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                <button
                    onClick={() => handleShowModal(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                >
                    <span>{t.career.detailsBtn}</span>
                    <HiOutlineArrowRight className="text-xs" />
                </button>
            </div>
        </div>
    );
}
