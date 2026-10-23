import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";

const roundButton =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-night-edge bg-night-card/90 text-mist-bright transition-colors hover:border-mist-dim hover:bg-night-chip";

export default function ProjectGallery({ open, onClose, images, index, onIndexChange, projectName, note }) {
    const { t } = useLanguage();
    const total = images.length;
    const current = images[index];
    const hasMany = total > 1;
    const go = (i) => onIndexChange((i + total) % total);

    // Setas do teclado passam as imagens (Esc já é tratado pelo Dialog)
    useEffect(() => {
        if (!open || !hasMany) return undefined;
        const handleKey = (event) => {
            if (event.key === "ArrowLeft") go(index - 1);
            if (event.key === "ArrowRight") go(index + 1);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    });

    if (!current) return null;

    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-night/90 backdrop-blur-md" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex w-full max-w-[1180px] flex-col gap-3.5 font-sans text-mist-bright">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex min-w-0 items-baseline gap-3">
                                        <Dialog.Title className="font-display text-lg font-bold">{projectName}</Dialog.Title>
                                        <span className="truncate text-[13px] text-mist-dim">
                                            {hasMany && `${index + 1} / ${total}`}
                                            {hasMany && note && " · "}
                                            {note}
                                        </span>
                                    </div>
                                    <button type="button" onClick={onClose} className={roundButton}>
                                        <span className="sr-only">{t.projects.gallery.close}</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="relative flex items-center">
                                    <img
                                        src={current.src}
                                        alt={current.title || projectName}
                                        className="max-h-[70vh] w-full rounded-2xl border border-night-edge bg-night-card object-contain"
                                    />
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

                                {current.title && (
                                    <p className="text-[15px] leading-relaxed text-mist">
                                        <b className="text-mist-bright">{current.title}</b>
                                        {current.caption && `: ${current.caption}`}
                                    </p>
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
