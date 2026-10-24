import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageCarousel from "./ImageCarousel";
import ProjectLinks from "./ProjectLinks";
import { useLanguage } from "../context/LanguageContext";

const sectionTitle = "mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-accent";

// Janela "Ver detalhes": galeria, descrição completa, como funciona, informações e stack agrupada
export default function ProjectDetails({ open, onClose, item, images, name, subtitle }) {
    const { t, localize } = useLanguage();
    const [index, setIndex] = useState(0);
    const stackGroups = item.stackGroups ?? [{ group: t.projects.stack, items: item.tags }];

    return (
        <Transition appear show={open} as={Fragment} afterLeave={() => setIndex(0)}>
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
                    <div className="fixed inset-0 bg-night/85 backdrop-blur-md" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-start justify-center p-3 sm:p-8">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-200"
                            enterFrom="opacity-0 translate-y-4"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-4"
                        >
                            <Dialog.Panel className="w-full max-w-[1080px] overflow-hidden rounded-3xl border border-night-edge bg-night-card font-sans text-mist-bright shadow-2xl">
                                <div className="flex items-start justify-between gap-5 p-6 pb-5 sm:p-8 sm:pb-5">
                                    <div>
                                        {item.badgeText && (
                                            <p className="mb-2 text-xs uppercase tracking-[0.1em] text-mist-dim">
                                                {localize(item.badgeText)}
                                            </p>
                                        )}
                                        <Dialog.Title className="font-display text-3xl font-bold leading-tight sm:text-[38px]">
                                            {name}
                                        </Dialog.Title>
                                        {subtitle && <p className="mt-1.5 text-[17px] text-mist">{subtitle}</p>}
                                        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                                            <ProjectLinks item={item} />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-night-edge hover:border-mist-dim hover:bg-night-chip"
                                    >
                                        <span className="sr-only">{t.projects.closeDetails}</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>

                                {images.length > 0 && (
                                    <div className="px-6 sm:px-8">
                                        <ImageCarousel
                                            images={images}
                                            index={index}
                                            onIndexChange={setIndex}
                                            note={localize(item.galleryNote)}
                                            alt={name}
                                            imageClassName="aspect-[1366/712]"
                                        />
                                    </div>
                                )}

                                <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:gap-10">
                                    <div className="flex flex-col gap-7 lg:flex-[2]">
                                        <section>
                                            <h3 className={sectionTitle}>{t.projects.about}</h3>
                                            <p className="text-base leading-relaxed text-mist">{localize(item.description)}</p>
                                        </section>
                                        {item.steps && (
                                            <section>
                                                <h3 className={sectionTitle}>{t.projects.howItWorks}</h3>
                                                <ol className="flex flex-col gap-3.5 text-[15px] leading-relaxed text-mist">
                                                    {item.steps.map((step, i) => (
                                                        <li key={i} className="flex items-start gap-3.5">
                                                            <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-night-chip text-[13px] font-bold text-accent">
                                                                {i + 1}
                                                            </span>
                                                            <span>
                                                                <b className="text-mist-bright">{localize(step.title)}</b>:{" "}
                                                                {localize(step.text)}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </section>
                                        )}
                                    </div>

                                    <aside className="flex flex-col gap-4 lg:flex-1">
                                        {item.facts && (
                                            <div className="rounded-2xl border border-night-line bg-night/50 p-5">
                                                <h3 className={sectionTitle}>{t.projects.info}</h3>
                                                <dl>
                                                    {item.facts.map((fact, i) => (
                                                        <div
                                                            key={i}
                                                            className="flex justify-between gap-3 border-b border-night-line py-2.5 text-sm last:border-0"
                                                        >
                                                            <dt className="text-mist-dim">{localize(fact.label)}</dt>
                                                            <dd className="text-right">{localize(fact.value)}</dd>
                                                        </div>
                                                    ))}
                                                </dl>
                                            </div>
                                        )}
                                        <div className="rounded-2xl border border-night-line bg-night/50 p-5">
                                            <h3 className={sectionTitle}>{t.projects.stack}</h3>
                                            {stackGroups.map((group, i) => (
                                                <div key={i} className="mt-3 first:mt-0">
                                                    {item.stackGroups && (
                                                        <p className="text-xs text-mist-dim">{localize(group.group)}</p>
                                                    )}
                                                    <ul className="mt-2 flex flex-wrap gap-1.5">
                                                        {group.items.map((tech) => (
                                                            <li key={tech} className="rounded-full bg-night-chip px-2.5 py-1 text-xs">
                                                                {tech}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </aside>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
