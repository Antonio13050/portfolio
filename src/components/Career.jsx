import { useState } from "react";
import data from "../data/data.json";
import Modal from "./Modal";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

// id do cargo atual em data.career
const CURRENT_ROLE_ID = 1;

// Carreira e formação numa única linha do tempo, agrupada pelo ano de início
const entries = [
    ...data.career.map((item) => ({ ...item, key: `career-${item.id}`, isCareer: true })),
    ...data.education.map((item) => ({ ...item, key: `education-${item.id}`, isCareer: false })),
].sort((a, b) => a.start.localeCompare(b.start));

const timeline = entries.reduce((groups, item) => {
    const year = item.start.slice(0, 4);
    const group = groups.find((g) => g.year === year);
    if (group) group.items.push(item);
    else groups.push({ year, items: [item] });
    return groups;
}, []);

export default function Career() {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const { t, localize } = useLanguage();

    const handleShowModal = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    return (
        <section name="experience" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 py-20 sm:px-6">
            <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.title} />

            <ol className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-y-10">
                {timeline.map(({ year, items }) => {
                    const isCurrent = items.some((item) => item.isCareer && item.id === CURRENT_ROLE_ID);
                    const hasCareer = items.some((item) => item.isCareer);
                    const dot = isCurrent ? "bg-accent" : hasCareer ? "bg-accent-blue" : "bg-night-edge";

                    return (
                        <li
                            key={year}
                            className={`relative border-t pr-5 pt-7 ${isCurrent ? "border-accent" : "border-night-edge"}`}
                        >
                            <span className={`absolute -top-[6px] left-0 h-[11px] w-[11px] rounded-full ${dot}`} />
                            <p
                                className={`font-display text-[22px] font-bold ${
                                    isCurrent ? "text-accent" : hasCareer ? "text-mist-bright" : "text-mist-dim"
                                }`}
                            >
                                {isCurrent ? `${year} — ${t.experience.current}` : year}
                            </p>
                            <ul className="mt-3 space-y-3">
                                {items.map((item) => (
                                    <li key={item.key}>
                                        <button
                                            type="button"
                                            onClick={() => handleShowModal(item)}
                                            className="text-left text-sm leading-snug text-mist underline-offset-4 transition-colors hover:text-mist-bright hover:underline"
                                        >
                                            {localize(item.title)}
                                        </button>
                                        <p className="mt-1 text-xs text-mist-dim">{localize(item.dates)}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ol>

            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                title={localize(selectedItem?.title)}
                details={localize(selectedItem?.details) || [localize(selectedItem?.description)]}
            />
        </section>
    );
}
