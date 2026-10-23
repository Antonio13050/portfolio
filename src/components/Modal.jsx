import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "../context/LanguageContext";

export default function Modal({ showModal, setShowModal, title, details }) {
    const { t } = useLanguage();

    return (
        <Transition appear show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setShowModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-night/80 backdrop-blur-md" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl rounded-3xl border border-night-edge bg-night-card p-6 text-left shadow-2xl sm:p-8">
                                <div className="flex items-start justify-between gap-4 border-b border-night-line pb-4">
                                    <Dialog.Title as="h3" className="font-display text-xl font-bold text-mist-bright">
                                        {title}
                                    </Dialog.Title>
                                    <button
                                        type="button"
                                        className="rounded-xl p-2 text-mist-dim transition-colors hover:bg-night-chip hover:text-mist-bright"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="sr-only">{t.experience.close}</span>
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="mt-6 max-h-[60vh] space-y-3 overflow-y-auto pr-2">
                                    {(Array.isArray(details) ? details : [details]).map((paragraph, index) => (
                                        <p key={index} className="text-sm leading-relaxed text-mist">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className="mt-8 flex justify-end border-t border-night-line pt-4">
                                    <button
                                        type="button"
                                        className="rounded-full bg-night-chip px-5 py-2.5 text-sm font-semibold text-mist-bright transition-colors hover:bg-night-edge"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {t.experience.close}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
