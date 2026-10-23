export default function SectionHeader({ eyebrow, title, description }) {
    return (
        <div className="mb-10">
            <p className="mb-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-accent">
                {eyebrow}
            </p>
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-tight text-mist-bright sm:text-5xl">
                {title}
            </h2>
            {description && <p className="mt-3 max-w-2xl text-[17px] leading-relaxed text-mist">{description}</p>}
        </div>
    );
}
