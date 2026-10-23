import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    const links = [
        { id: 1, title: t.nav.home, path: "home" },
        { id: 2, title: t.nav.about, path: "about" },
        { id: 3, title: t.nav.portfolio, path: "portfolio" },
        { id: 4, title: t.nav.skills, path: "skills" },
        { id: 5, title: t.nav.career, path: "career" },
    ];

    return (
        <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md text-zinc-400 py-12 px-4 sm:px-6 lg:px-8 z-20 relative">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <span className="text-2xl font-signature font-bold text-white">Antonio</span>
                    <p className="text-xs text-zinc-400">
                        {t.footer.role}
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
                    {links.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/Antonio13050/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-white hover:border-zinc-600 transition-all hover:scale-105"
                        title="GitHub"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-base" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/antonio13050/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-105"
                        title="LinkedIn"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn className="text-base" />
                    </a>
                    <a
                        href="https://wa.me/5548996458616"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl glass-panel text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all hover:scale-105"
                        title="WhatsApp"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp className="text-base" />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 text-center text-[11px] text-zinc-400">
                Copyright © {new Date().getFullYear()} Antonio Carlos Virissimo. {t.footer.copyright}
            </div>
        </footer>
    );
}
