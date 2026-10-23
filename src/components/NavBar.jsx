import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { contactLinks } from "../data/links";

const languages = [
    { code: "pt", label: "PT", name: "Português" },
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
];

function LanguageSwitcher({ layoutId }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center rounded-full border border-night-line bg-night-card/80 p-0.5 text-xs font-medium">
            {languages.map((lang) => {
                const isActive = language === lang.code;
                return (
                    <button
                        key={lang.code}
                        type="button"
                        onClick={() => setLanguage(lang.code)}
                        aria-label={lang.name}
                        aria-pressed={isActive}
                        className="relative rounded-full px-3 py-1.5"
                    >
                        {isActive && (
                            <motion.span
                                layoutId={layoutId}
                                className="absolute inset-0 rounded-full bg-night-chip"
                                transition={{ type: "spring", stiffness: 450, damping: 32 }}
                            />
                        )}
                        <span
                            className={`relative z-10 transition-colors ${
                                isActive ? "font-semibold text-mist-bright" : "text-mist-dim hover:text-mist-bright"
                            }`}
                        >
                            {lang.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    const navLinks = [
        { title: t.nav.projects, path: "projects" },
        { title: t.nav.experience, path: "experience" },
        { title: t.nav.skills, path: "skills" },
        { title: t.nav.contact, path: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
                scrolled ? "border-night-line bg-night/85 py-3 backdrop-blur-md" : "border-transparent py-5"
            }`}
        >
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    href="#home"
                    className="flex cursor-pointer items-center gap-3 font-display text-lg font-bold"
                >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-night-edge text-sm text-accent">
                        AC
                    </span>
                    <span className="hidden sm:inline">Antonio Carlos Virissimo</span>
                </Link>

                <nav className="hidden items-center gap-1 rounded-full border border-night-line bg-night-card/70 p-1.5 text-sm lg:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            href={`#${item.path}`}
                            activeClass="!bg-night-chip !text-mist-bright"
                            className="cursor-pointer rounded-full px-3.5 py-2 text-mist-dim transition-colors hover:text-mist-bright"
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <LanguageSwitcher layoutId="desktopActiveLang" />
                </div>

                <div className="flex items-center gap-2 lg:hidden">
                    <LanguageSwitcher layoutId="mobileActiveLang" />
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl border border-night-line p-2.5 text-mist-dim transition-colors hover:text-mist-bright"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">{t.nav.openMenu}</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-night/80 backdrop-blur-sm" />

                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col justify-between overflow-y-auto border-l border-night-line bg-night-card p-6">
                    <div>
                        <div className="flex items-center justify-between border-b border-night-line pb-6">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-night-edge font-display text-sm font-bold text-accent">
                                AC
                            </span>
                            <button
                                type="button"
                                className="rounded-xl p-2 text-mist-dim hover:bg-night-chip hover:text-mist-bright"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">{t.nav.closeMenu}</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-6 flex flex-col gap-1">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    href={`#${item.path}`}
                                    className="block cursor-pointer rounded-xl px-4 py-3 text-base font-medium text-mist transition-colors hover:bg-night-chip hover:text-mist-bright"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-night-line pt-6">
                        <a
                            href={contactLinks.whatsapp}
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-semibold text-night"
                        >
                            <FaWhatsapp className="text-base" />
                            WhatsApp
                        </a>
                        <div className="flex justify-center gap-3 pt-1">
                            <a
                                href={contactLinks.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="rounded-xl border border-night-line p-3 text-mist-dim hover:text-mist-bright"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                            <a
                                href={contactLinks.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="rounded-xl border border-night-line p-3 text-mist-dim hover:text-mist-bright"
                            >
                                <FaLinkedinIn className="text-lg" />
                            </a>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
