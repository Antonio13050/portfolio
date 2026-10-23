import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { id: 1, title: t.nav.home, path: "home" },
        { id: 2, title: t.nav.about, path: "about" },
        { id: 3, title: t.nav.portfolio, path: "portfolio" },
        { id: 4, title: t.nav.skills, path: "skills" },
        { id: 5, title: t.nav.career, path: "career" },
    ];

    const languages = [
        { code: "pt", label: "PT", name: "Português" },
        { code: "en", label: "EN", name: "English" },
        { code: "es", label: "ES", name: "Español" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled ? "glass-nav py-3 shadow-2xl" : "bg-transparent py-5"
            }`}
        >
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="cursor-pointer group flex items-center gap-2"
                    >
                        <span className="text-3xl sm:text-4xl font-signature font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:to-white transition-all">
                            Antonio
                        </span>
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu & Lang Switcher */}
                <div className="flex items-center gap-2 lg:hidden">
                    {/* Mobile Language Switcher */}
                    <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 text-xs font-medium">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                aria-label={lang.name}
                                aria-pressed={language === lang.code}
                                className="relative px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors"
                            >
                                {language === lang.code && (
                                    <motion.div
                                        layoutId="mobileActiveLang"
                                        className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700/60 shadow-sm"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className={`relative z-10 ${language === lang.code ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}`}>
                                    {lang.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl p-2.5 text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors border border-zinc-800"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">{t.nav.openMenu}</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex lg:gap-x-8 items-center">
                    {navLinks.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            activeClass="text-white font-semibold"
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Desktop Language Switcher & CTAs */}
                <div className="hidden lg:flex items-center gap-3">
                    {/* Smooth Animated Sliding Language Selector */}
                    <div className="flex items-center bg-zinc-900/90 border border-zinc-800 rounded-full p-0.5 text-xs font-medium shadow-inner">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                aria-label={lang.name}
                                aria-pressed={language === lang.code}
                                className="relative px-3 py-1 rounded-full text-xs font-medium transition-colors"
                            >
                                {language === lang.code && (
                                    <motion.div
                                        layoutId="desktopActiveLang"
                                        className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700/60 shadow-sm"
                                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors ${language === lang.code ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"}`}>
                                    {lang.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    <a
                        href="https://github.com/Antonio13050/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800 transition-all hover:scale-105"
                        title="GitHub"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-lg" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/antonio13050/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl text-zinc-400 hover:text-blue-400 hover:bg-zinc-800/80 border border-zinc-800 transition-all hover:scale-105"
                        title="LinkedIn"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn className="text-lg" />
                    </a>
                    <a
                        href="https://wa.me/5548996458616"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/50 hover:border-emerald-700 transition-all hover:scale-105"
                    >
                        <FaWhatsapp className="text-sm" />
                        <span>{t.nav.contact}</span>
                    </a>
                </div>
            </nav>

            {/* Mobile Dialog */}
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />

                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                            <span className="text-2xl font-signature font-bold text-white">
                                Antonio
                            </span>
                            <button
                                type="button"
                                className="rounded-xl p-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">{t.nav.closeMenu}</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Language switcher inside mobile menu */}
                        <div className="mt-4 flex items-center justify-between p-2 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <span className="text-xs font-medium text-zinc-400">
                                Idioma / Language:
                            </span>
                            <div className="flex bg-zinc-950 rounded-full p-0.5 border border-zinc-800">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        aria-label={lang.name}
                                        aria-pressed={language === lang.code}
                                        className="relative px-3 py-1 rounded-full text-xs transition-all font-medium"
                                    >
                                        {language === lang.code && (
                                            <motion.div
                                                layoutId="dialogActiveLang"
                                                className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700/60 shadow"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        <span className={`relative z-10 ${language === lang.code ? "text-white font-semibold" : "text-zinc-400 hover:text-white"}`}>
                                            {lang.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-2">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all cursor-pointer"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-800 flex flex-col gap-3">
                        <a
                            href="https://wa.me/5548996458616"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 hover:bg-emerald-900/70"
                        >
                            <FaWhatsapp className="text-base" />
                            {t.nav.talk}
                        </a>
                        <div className="flex justify-center gap-4 pt-2">
                            <a
                                href="https://github.com/Antonio13050/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-lg" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/antonio13050/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-xl text-zinc-400 hover:text-blue-400 bg-zinc-900 border border-zinc-800"
                                aria-label="LinkedIn"
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
