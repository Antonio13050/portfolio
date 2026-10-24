import { useState } from "react";
import { FaExpand, FaRegImages } from "react-icons/fa6";
import ProjectGallery from "./ProjectGallery";
import ProjectDetails from "./ProjectDetails";
import ProjectLinks from "./ProjectLinks";
import { useLanguage } from "../context/LanguageContext";
import { projectImages } from "../data/images";

// Projeto em destaque: imagem grande de um lado, resumo e destaques do outro (lados alternados)
export default function ProjectShowcase({ item, position }) {
    const { t, localize } = useLanguage();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [detailsOpen, setDetailsOpen] = useState(false);

    // "Nome — subtítulo": o nome vira o título e o resto, a linha de apoio
    const [name, subtitle] = localize(item.title).split(" — ");
    const images = projectImages(item, localize);
    const cover = images[0];
    const reversed = position % 2 === 1;

    const openGallery = () => {
        setGalleryIndex(0);
        setGalleryOpen(true);
    };

    return (
        <article
            className={`flex flex-col items-center gap-8 border-t border-night-line py-10 lg:gap-10 ${
                reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
        >
            {cover ? (
                <button
                    type="button"
                    onClick={openGallery}
                    className="group/cover relative aspect-[1366/712] w-full cursor-zoom-in overflow-hidden rounded-[18px] border border-night-edge bg-night-card lg:flex-[1.15]"
                >
                    <img
                        src={cover.src}
                        alt={cover.title || name}
                        loading="lazy"
                        className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover/cover:scale-[1.03]"
                    />
                    <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 rounded-full bg-night/80 px-3 py-1.5 text-xs font-semibold text-mist-bright transition-colors group-hover/cover:bg-accent group-hover/cover:text-night">
                        {images.length > 1 ? <FaRegImages aria-hidden="true" /> : <FaExpand aria-hidden="true" />}
                        {images.length > 1
                            ? t.projects.gallery.count.replace("{count}", images.length)
                            : t.projects.gallery.enlarge}
                    </span>
                </button>
            ) : (
                <div className="flex aspect-[1366/712] w-full flex-col justify-end gap-1.5 rounded-[18px] border border-night-edge bg-night-panel p-8 lg:flex-[1.15]">
                    <span className="font-display text-3xl font-bold text-accent">{item.flow}</span>
                </div>
            )}

            <div className="flex w-full flex-col gap-4 lg:flex-1">
                <p className="text-xs uppercase tracking-[0.1em] text-mist-dim">
                    {String(position + 1).padStart(2, "0")}
                    {item.badgeText && ` · ${localize(item.badgeText)}`}
                </p>
                <div>
                    <h3 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{name}</h3>
                    {subtitle && <p className="mt-1.5 text-[15px] font-medium text-mist-dim">{subtitle}</p>}
                </div>
                <p className="text-[17px] leading-relaxed text-mist">{localize(item.summary)}</p>

                {item.keyPoints && (
                    <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                        {item.keyPoints.map((point, i) => (
                            <li
                                key={i}
                                className="rounded-xl border border-night-line bg-night/60 p-3 text-[13px] leading-snug text-mist"
                            >
                                <b className="mb-1 block text-xs uppercase tracking-[0.06em] text-accent">
                                    {localize(point.title)}
                                </b>
                                {localize(point.text)}
                            </li>
                        ))}
                    </ul>
                )}

                <p className="text-[13px] leading-relaxed text-mist-dim">{item.tags.slice(0, 6).join(" · ")}</p>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                    <button
                        type="button"
                        onClick={() => setDetailsOpen(true)}
                        className="inline-flex min-h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-night transition-opacity hover:opacity-90"
                    >
                        {t.projects.details}
                    </button>
                    <ProjectLinks item={item} />
                </div>
            </div>

            {cover && (
                <ProjectGallery
                    open={galleryOpen}
                    onClose={() => setGalleryOpen(false)}
                    images={images}
                    index={galleryIndex}
                    onIndexChange={setGalleryIndex}
                    projectName={name}
                    note={localize(item.galleryNote)}
                />
            )}
            <ProjectDetails
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                item={item}
                images={images}
                name={name}
                subtitle={subtitle}
            />
        </article>
    );
}
