import Link from "next/link";

export function PageDivider({
  eyebrow,
  titleLead,
  titleIt,
  body,
  cta,
  href,
}: {
  eyebrow: string;
  titleLead: string;
  titleIt: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <section className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 80% 20%, rgba(245,197,24,0.10), transparent 60%), radial-gradient(50% 60% at 20% 80%, rgba(0,168,107,0.12), transparent 60%)",
        }}
      />
      <div className="container-x relative z-[1]">
        <span className="eyebrow text-white/60 before:bg-white/30 inline-flex justify-center">
          {eyebrow}
        </span>
        <h2
          className="font-bold tracking-[-0.035em] mt-5"
          style={{ fontSize: "clamp(36px, 3.2vw, 52px)" }}
        >
          {titleLead}
          <br />
          <span className="it text-[var(--color-accent)]">{titleIt}</span>
        </h2>
        <p className="text-[18px] text-white/70 mt-4 mx-auto max-w-[600px]">
          {body}
        </p>
        <Link
          href={href}
          className="btn btn-secondary btn-arrow mt-8 inline-flex"
          style={{ background: "#fff" }}
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
