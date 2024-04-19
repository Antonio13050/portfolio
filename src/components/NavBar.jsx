import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 bg-black text-gray-500 w-full">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 "
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <h1 className="text-5xl font-signature">Antonio</h1>
                </div>

                {!mobileMenuOpen && (
                    <div className="flex lg:hidden gap-x-6 text-gray-400">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                )}

                <Popover.Group className="hidden lg:flex lg:gap-x-12 lg:justify-end items-center ">
                    <Popover className="relative">
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        ></Transition>
                    </Popover>

                    <Link
                        to="home"
                        className="font-semibold leading-6 hover:text-gray-300 hover:scale-125 duration-200 cursor-pointer"
                    >
                        Home
                    </Link>
                    <Link
                        to="about"
                        className="font-semibold leading-6 hover:text-gray-300 hover:scale-125 duration-200 cursor-pointer"
                    >
                        Sobre
                    </Link>
                    <Link
                        to="portfolio"
                        className="font-semibold leading-6 hover:text-gray-300 hover:scale-125 duration-200 cursor-pointer"
                    >
                        Portfólio
                    </Link>
                    <Link
                        href="#"
                        className="font-semibold leading-6 hover:text-gray-300 hover:scale-125 duration-200 cursor-pointer"
                    >
                        Contato
                    </Link>
                </Popover.Group>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-b from-black to-gray-800 text-gray-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        {mobileMenuOpen && (
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        )}
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="home"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-300 duration-200 cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="about"
                                    className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 hover:text-gray-300 duration-200 cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sobre
                                </Link>
                                <Link
                                    to="portfolio"
                                    className="-mx-3 block rounded-lg px-3 py-2  text-base font-semibold leading-7 hover:text-gray-300 duration-200 cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Portfólio
                                </Link>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-gray-300 duration-200 cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contato
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
