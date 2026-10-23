import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HiOutlineSparkles } from "react-icons/hi2";
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
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 text-left align-middle shadow-2xl transition-all border border-zinc-700/80 bg-zinc-950">
                                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                                    <div className="flex items-center gap-2">
                                        <HiOutlineSparkles className="text-indigo-400 text-lg" />
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg sm:text-xl font-bold leading-6 text-white"
                                        >
                                            {title}
                                        </Dialog.Title>
                                    </div>
                                    <button
                                        type="button"
                                        className="rounded-xl p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="mt-6 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                                    {Array.isArray(details) ? (
                                        details.map((paragraph, index) => (
                                            <p
                                                key={index}
                                                className="text-sm text-zinc-300 leading-relaxed font-normal"
                                            >
                                                {paragraph}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                                            {details}
                                        </p>
                                    )}
                                </div>

                                <div className="mt-8 pt-4 border-t border-zinc-800 flex justify-end">
                                    <button
                                        type="button"
                                        className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold transition-colors"
                                        onClick={() => setShowModal(false)}
                                    >
                                        {t.career.closeModal}
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
