import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ImageCarousel from "./ImageCarousel";
import { useLanguage } from "../context/LanguageContext";

// Galeria em tela cheia, aberta ao clicar na imagem do projeto
export default function ProjectGallery({ open, onClose, images, index, onIndexChange, projectName, note }) {
    const { t } = useLanguage();

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
                                    <Dialog.Title className="font-display text-lg font-bold">{projectName}</Dialog.Title>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-night-edge bg-night-card/90 hover:border-mist-dim"
                                    >
                                        <span className="sr-only">{t.projects.gallery.close}</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                                <ImageCarousel
                                    images={images}
                                    index={index}
                                    onIndexChange={onIndexChange}
                                    note={note}
                                    alt={projectName}
                                    imageClassName="max-h-[70vh]"
                                />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
