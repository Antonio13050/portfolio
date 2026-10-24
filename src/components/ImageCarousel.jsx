import { useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";

const roundButton =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-night-edge bg-night-card/90 text-mist-bright transition-colors hover:border-mist-dim hover:bg-night-chip";

// Imagem com setas, contador, legenda e miniaturas. As setas do teclado também passam as imagens.
export default function ImageCarousel({ images, index, onIndexChange, note, imageClassName = "", alt }) {
    const { t } = useLanguage();
    const total = images.length;
    const current = images[index];
    const hasMany = total > 1;
    const go = (i) => onIndexChange((i + total) % total);

    useEffect(() => {
        if (!hasMany) return undefined;
        const handleKey = (event) => {
            if (event.key === "ArrowLeft") go(index - 1);
            if (event.key === "ArrowRight") go(index + 1);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    if (!current) return null;

    return (
        <div className="flex flex-col gap-3">
            <div className="relative overflow-hidden rounded-2xl border border-night-edge bg-night">
                <img src={current.src} alt={current.title || alt} className={`w-full object-contain ${imageClassName}`} />
                {hasMany && (
                    <>
                        <button
                            type="button"
                            onClick={() => go(index - 1)}
                            className={`${roundButton} absolute left-3 top-1/2 -translate-y-1/2`}
                        >
                            <span className="sr-only">{t.projects.gallery.prev}</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(index + 1)}
                            className={`${roundButton} absolute right-3 top-1/2 -translate-y-1/2`}
                        >
                            <span className="sr-only">{t.projects.gallery.next}</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </>
                )}
            </div>

            {(current.title || hasMany || note) && (
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    {current.title && (
                        <p className="text-[15px] leading-relaxed text-mist">
                            <b className="text-mist-bright">{current.title}</b>
                            {current.caption && `: ${current.caption}`}
                        </p>
                    )}
                    {(hasMany || note) && (
                        <span className="flex-none text-[13px] text-mist-dim">
                            {hasMany && `${index + 1} / ${total}`}
                            {hasMany && note && " · "}
                            {note}
                        </span>
                    )}
                </div>
            )}

            {hasMany && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                    {images.map((image, i) => (
                        <button
                            key={image.src}
                            type="button"
                            onClick={() => go(i)}
                            aria-current={i === index}
                            className={`h-14 w-24 flex-none overflow-hidden rounded-lg border-2 bg-night-card transition-opacity sm:w-28 ${
                                i === index ? "border-accent" : "border-night-edge opacity-55 hover:opacity-100"
                            }`}
                        >
                            <span className="sr-only">{image.title || `${i + 1}`}</span>
                            <img src={image.src} alt="" className="h-full w-full object-cover object-left-top" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
