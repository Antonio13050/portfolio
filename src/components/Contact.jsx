import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { useLanguage } from "../context/LanguageContext";
import { contactLinks } from "../data/links";

const outlineButton =
    "inline-flex min-h-12 items-center gap-2 rounded-full border border-night-edge px-6 font-medium transition-colors hover:border-mist-dim";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section name="contact" className="relative z-20 mx-auto w-full max-w-[1200px] px-4 pb-10 pt-20 sm:px-6">
            <div className="flex flex-col gap-8 rounded-[28px] border border-night-edge bg-night-card/90 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                    <h2 className="font-display text-[32px] font-bold tracking-tight sm:text-5xl">{t.contact.title}</h2>
                    <p className="mt-3 text-[17px] leading-relaxed text-mist">{t.contact.text}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                    <a
                        href={contactLinks.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-semibold text-night transition-opacity hover:opacity-90"
                    >
                        <FaWhatsapp className="text-lg" />
                        WhatsApp
                    </a>
                    <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className={outlineButton}>
                        <FaLinkedinIn />
                        LinkedIn
                    </a>
                    <a href={contactLinks.github} target="_blank" rel="noreferrer" className={outlineButton}>
                        <FaGithub />
                        GitHub
                    </a>
                    <a href={contactLinks.cv} download={contactLinks.cvFileName} className={outlineButton}>
                        <RiDownloadLine />
                        {t.contact.cv}
                    </a>
                </div>
            </div>
        </section>
    );
}
