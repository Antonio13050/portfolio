import { useState } from "react";
import { FaGithub, FaArrowUpRightFromSquare, FaGlobe, FaLock, FaExpand, FaRegImages } from "react-icons/fa6";
import ProjectGallery from "./ProjectGallery";
import { useLanguage } from "../context/LanguageContext";
import { assetUrl } from "../data/images";

export default function ProjectCard({ item }) {
    const { t, localize } = useLanguage();
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const title = localize(item.title);
    // "Nome — subtítulo": o nome vira o título do card e o resto, uma linha de apoio
    const [name, subtitle] = title.split(" — ");

    // Galeria do projeto; sem galeria, a capa sozinha. A primeira imagem é a capa do card.
    const images = (item.gallery ?? (item.cover ? [{ image: `covers/${item.cover}` }] : [])).map((image) => ({
        src: assetUrl(localize(image.image)),
        title: localize(image.title),
        caption: localize(image.caption),
    }));
    const cover = images[0];

    const openGallery = () => {
        setGalleryIndex(0);
        setGalleryOpen(true);
    };

    return (
        <article className="flex flex-col overflow-hidden rounded-[20px] border border-night-line bg-night-card/85 transition-colors hover:border-night-edge">
            {/* Capa: print do projeto (abre a galeria) ou, sem print, o fluxo principal da arquitetura */}
            {cover ? (
                <button
                    type="button"
                    onClick={openGallery}
                    className="group/cover relative block h-[180px] w-full cursor-zoom-in overflow-hidden border-b border-night-line bg-night-panel"
                >
                    <img
                        src={cover.src}
                        alt={cover.title || name}
                        loading="lazy"
                        className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover/cover:scale-[1.03]"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-night/80 px-3 py-1.5 text-xs font-semibold text-mist-bright transition-colors group-hover/cover:bg-accent group-hover/cover:text-night">
                        {images.length > 1 ? <FaRegImages aria-hidden="true" /> : <FaExpand aria-hidden="true" />}
                        {images.length > 1
                            ? t.projects.gallery.count.replace("{count}", images.length)
                            : t.projects.gallery.enlarge}
                    </span>
                </button>
            ) : (
                <div className="flex min-h-[180px] flex-col justify-end gap-1.5 border-b border-night-line bg-night-panel p-6">
                    <span className="text-xs uppercase tracking-[0.1em] text-mist-dim">
                        {localize(item.badgeText)}
                    </span>
                    <span
                        className={`font-display text-[26px] font-bold leading-tight ${
                            item.category === "Backend" ? "text-accent-blue" : "text-accent"
                        }`}
                    >
                        {item.flow}
                    </span>
                </div>
            )}

            <div className="flex flex-1 flex-col p-6">
                {cover && item.badgeText && (
                    <span className="mb-2 text-xs uppercase tracking-[0.1em] text-mist-dim">
                        {localize(item.badgeText)}
                    </span>
                )}
                <h3 className="font-display text-2xl font-bold">{name}</h3>
                {subtitle && <p className="mt-1 text-sm font-medium text-mist-dim">{subtitle}</p>}
                <p className="mt-2.5 text-[15px] leading-relaxed text-mist">{localize(item.description)}</p>
                <p className="mt-4 text-[13px] leading-relaxed text-mist-dim">{item.tags.join(" · ")}</p>

                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm font-semibold">
                    {item.link && (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                            <FaGithub />
                            {t.projects.github}
                        </a>
                    )}
                    {item.online && (
                        <a
                            href={item.online}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
                        >
                            <FaArrowUpRightFromSquare className="text-xs" />
                            {t.projects.live}
                        </a>
                    )}
                    {item.site && (
                        <a
                            href={item.site}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-accent transition-opacity hover:opacity-80"
                        >
                            <FaGlobe className="text-xs" />
                            {t.projects.site}
                        </a>
                    )}
                    {(item.badgeType === "Enterprise" || item.private) && (
                        <span className="inline-flex items-center gap-2 font-normal text-mist-dim">
                            <FaLock className="text-xs" />
                            {item.badgeType === "Enterprise" ? t.projects.enterprise : t.projects.private}
                        </span>
                    )}
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
        </article>
    );
}
