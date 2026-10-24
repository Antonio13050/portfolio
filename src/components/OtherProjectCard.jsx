import { useState } from "react";
import { RiArrowRightUpLine } from "react-icons/ri";
import ProjectDetails from "./ProjectDetails";
import { useLanguage } from "../context/LanguageContext";
import { projectImages } from "../data/images";

// Projeto de estudo em formato compacto; o clique abre a janela de detalhes
export default function OtherProjectCard({ item }) {
    const { localize } = useLanguage();
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [name, subtitle] = localize(item.title).split(" — ");

    return (
        <>
            <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-night-line bg-night-card/85 p-5 text-left transition-colors hover:border-mist-dim"
            >
                <span>
                    <span className="block font-display text-[17px] font-bold">{name}</span>
                    <span className="mt-1 block text-[13px] leading-snug text-mist-dim">{localize(item.summary)}</span>
                </span>
                <RiArrowRightUpLine
                    className="mt-1 flex-none text-mist-dim transition-colors group-hover:text-accent"
                    aria-hidden="true"
                />
            </button>
            <ProjectDetails
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                item={item}
                images={projectImages(item, localize)}
                name={name}
                subtitle={subtitle}
            />
        </>
    );
}
