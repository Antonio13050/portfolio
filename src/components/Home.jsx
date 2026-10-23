import { Link } from "react-scroll";
import Avatar from "../assets/avatar.png";
import { useLanguage } from "../context/LanguageContext";
import { contactLinks } from "../data/links";

// Posições em % da caixa de cada anel; o anel interno fica a 15% da borda
const outerOrbit = [
    { name: "LangGraph", x: "50%", y: "0%" },
    { name: "Java 21", x: "100%", y: "50%" },
    { name: "Next.js", x: "50%", y: "100%" },
    { name: "PostgreSQL", x: "0%", y: "50%" },
];

const innerOrbit = [
    { name: "Gemini", x: "85.36%", y: "14.64%", tone: "border-accent text-accent" },
    { name: "Spring Boot", x: "14.64%", y: "85.36%", tone: "border-accent-blue text-accent-blue" },
];

function OrbitChip({ name, x, y, tone = "border-night-edge text-mist-bright" }) {
    return (
        <span className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
            <span className={`orbit-chip block whitespace-nowrap rounded-full border bg-night-panel px-3.5 py-1.5 text-[13px] ${tone}`}>
                {name}
            </span>
        </span>
    );
}

export default function Home() {
    const { t } = useLanguage();

    return (
        <section
            name="home"
            className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center gap-16 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:gap-14"
        >
            <div className="w-full lg:flex-1">
                <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-night-line px-3.5 py-1.5 text-[13px] text-mist">
                    <span className="h-[7px] w-[7px] rounded-full bg-accent" />
                    {t.home.badge}
                </p>
                <h1 className="font-display text-[44px] font-bold leading-[0.98] tracking-[-0.035em] sm:text-6xl xl:text-7xl">
                    Antonio Carlos <span className="text-accent">Virissimo</span>
                </h1>
                <p className="mt-7 max-w-[540px] text-lg leading-relaxed text-mist">{t.home.lead}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                        to="contact"
                        smooth={true}
                        offset={-80}
                        duration={500}
                        href="#contact"
                        className="inline-flex min-h-12 cursor-pointer items-center rounded-full bg-accent px-6 font-semibold text-night transition-opacity hover:opacity-90"
                    >
                        {t.home.ctaContact}
                    </Link>
                    <a
                        href={contactLinks.cv}
                        download={contactLinks.cvFileName}
                        className="inline-flex min-h-12 items-center rounded-full border border-night-edge px-6 font-medium transition-colors hover:border-mist-dim"
                    >
                        {t.home.ctaCv}
                    </a>
                </div>
            </div>

            <div className="flex w-full justify-center lg:flex-1">
                <div className="orbit relative aspect-square w-[min(460px,calc(100vw-120px))]">
                    <div
                        className="orbit-ring absolute inset-0 rounded-full border border-night-line"
                        style={{ "--orbit-duration": "90s" }}
                    >
                        {outerOrbit.map((chip) => (
                            <OrbitChip key={chip.name} {...chip} />
                        ))}
                    </div>
                    <div
                        className="orbit-ring orbit-ring--reverse absolute inset-[15%] rounded-full border border-dashed border-night-edge"
                        style={{ "--orbit-duration": "70s" }}
                    >
                        {innerOrbit.map((chip) => (
                            <OrbitChip key={chip.name} {...chip} />
                        ))}
                    </div>
                    <div className="absolute inset-[30%] overflow-hidden rounded-full border border-night-edge bg-night-panel">
                        <img
                            src={Avatar}
                            alt={t.home.avatarAlt}
                            className="h-full w-full object-cover object-[center_20%]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
