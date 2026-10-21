import React, { useState, type FormEvent, type ChangeEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Mail,
  MapPin,
  PenTool,
  Code2,
  Fingerprint,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  IMAGES — replace these paths/URLs with your own                           */
/* -------------------------------------------------------------------------- */
const IMAGES = {
  hero: "/images/hero-portrait.png", // B&W portrait, transparent/dark background works best
  about: "/images/about-workspace.png", // portrait-ish image (approx 4:5)
  project1: "/images/project-nexus.png", // landscape (approx 16:10)
  project2: "/images/project-aura.png", // landscape (approx 16:10)
};

/* -------------------------------------------------------------------------- */
/*  Types & content                                                           */
/* -------------------------------------------------------------------------- */
type Accent = "purple" | "green";

interface NavLink {
  label: string;
  href: string;
}

interface Skill {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  icon: React.ReactNode;
  offset: string; // staggered vertical offset on desktop
}

interface Project {
  title: string;
  category: string;
  image: string;
  offset: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SKILLS: Skill[] = [
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive, immersive interfaces with a focus on deep aesthetic resonance and seamless user journeys.",
    tags: ["Figma", "Prototyping"],
    accent: "purple",
    icon: <PenTool size={16} />,
    offset: "md:mt-0",
  },
  {
    title: "Web Development",
    description:
      "Engineering robust, high-performance frontend architectures using modern frameworks and precise styling.",
    tags: ["React", "Tailwind"],
    accent: "green",
    icon: <Code2 size={16} />,
    offset: "md:mt-8",
  },
  {
    title: "Brand Identity",
    description:
      "Distilling complex concepts into striking visual identities that command attention in digital spaces.",
    tags: ["Strategy", "Typography"],
    accent: "purple",
    icon: <Fingerprint size={16} />,
    offset: "md:-mt-1",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Nexus FinTech",
    category: "Dashboard UI / System Design",
    image: IMAGES.project1,
    offset: "md:mt-0",
  },
  {
    title: "Aura Apparel",
    category: "E-commerce / WebGL Experience",
    image: IMAGES.project2,
    offset: "md:mt-16",
  },
];

const SOCIALS: NavLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
];

/* -------------------------------------------------------------------------- */
/*  Small reusable pieces                                                     */
/* -------------------------------------------------------------------------- */

/** Image with a graceful dark placeholder if the file is missing. */
const Img: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = "",
}) => {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900 text-xs text-zinc-500 ${className}`}
      >
        Add image: {alt}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};

const accentText: Record<Accent, string> = {
  purple: "text-violet-300",
  green: "text-emerald-300",
};

const accentTag: Record<Accent, string> = {
  purple: "bg-violet-400/10 text-violet-300 border-violet-300/20",
  green: "bg-emerald-400/10 text-emerald-300 border-emerald-300/20",
};

/* -------------------------------------------------------------------------- */
/*  Sections                                                                  */
/* -------------------------------------------------------------------------- */

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-[#1a1a24]/70 px-5 py-3 backdrop-blur-xl sm:px-8"
      >
        <a
          href="#top"
          className="text-lg font-extrabold tracking-tight text-white sm:text-xl"
        >
          CREATIVE.CORE
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l, i) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-violet-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 ${
                  i === 0
                    ? "text-violet-300 underline underline-offset-4"
                    : "text-zinc-300"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-violet-500 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] transition hover:bg-violet-400 sm:inline-block"
          >
            Hire me
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-zinc-200 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#1a1a24]/95 p-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-zinc-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-md bg-violet-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
              >
                Hire me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

const Hero: React.FC = () => (
  <section
    id="top"
    className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-6 px-6 pt-28 md:grid-cols-2 md:pt-0"
  >
    <div className="relative z-10 order-2 pb-16 md:order-1 md:pb-0">
      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
        Digital Artisan
      </p>
      <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
        CREATIVE DESIGNER
        <span className="block text-violet-400">&amp; DEVELOPER</span>
      </h1>
      <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
        Architecting high-performance digital experiences where artistic
        expression meets relentless technical precision.
      </p>
      <a
        href="#work"
        className="mt-8 inline-flex items-center gap-2 rounded-sm border border-white/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-widest text-zinc-200 transition hover:border-violet-400 hover:text-violet-300"
      >
        View work <ArrowRight size={12} />
      </a>
    </div>

    <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
      <div className="relative w-full max-w-sm md:max-w-md">
        <Img
          src={IMAGES.hero}
          alt="Portrait"
          className="aspect-[4/5] w-full object-cover grayscale"
        />
        {/* fade the portrait into the page background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#16161d] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#16161d]/60 via-transparent to-[#16161d]/40" />
      </div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section
    id="about"
    className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
  >
    <div>
      <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
        The Architect
        <br />
        behind the pixels.
      </h2>
      <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">
        Driven by a philosophy of functional minimalism, I merge deep
        engineering practices with cutting-edge visual design. Operating in the
        void between logic and emotion to build interfaces that feel alive.
      </p>
      <dl className="mt-8 flex gap-10">
        <div>
          <dt className="order-2 mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
            Years experience
          </dt>
          <dd className="-order-1 text-2xl font-bold text-violet-300">08+</dd>
        </div>
        <div>
          <dt className="order-2 mt-1 text-[10px] font-medium uppercase tracking-widest text-zinc-500">
            Projects shipped
          </dt>
          <dd className="-order-1 text-2xl font-bold text-emerald-300">120</dd>
        </div>
      </dl>
    </div>

    <div className="relative mx-auto w-full max-w-sm md:ml-auto">
      {/* offset outline frame */}
      <div className="absolute -bottom-4 -left-4 h-full w-full border border-white/10" />
      <Img
        src={IMAGES.about}
        alt="Working at the desk"
        className="relative aspect-[4/5] w-full object-cover grayscale"
      />
    </div>
  </section>
);

const Expertise: React.FC = () => (
  <section id="expertise" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
    <div className="mb-14 text-center">
      <h2 className="text-2xl font-bold text-zinc-100 sm:text-3xl">
        Core Competencies
      </h2>
      <div className="mx-auto mt-3 h-px w-12 bg-violet-300/40" />
    </div>

    <div className="grid items-start gap-6 md:grid-cols-3">
      {SKILLS.map((s) => (
        <article
          key={s.title}
          className={`rounded-xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07] ${s.offset}`}
        >
          <span className={accentText[s.accent]}>{s.icon}</span>
          <h3 className="mt-4 text-xl font-bold text-zinc-100">{s.title}</h3>
          <p className="mt-3 text-xs leading-relaxed text-zinc-400">
            {s.description}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {s.tags.map((t) => (
              <li
                key={t}
                className={`rounded border px-2 py-0.5 text-[10px] font-medium ${accentTag[s.accent]}`}
              >
                {t}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

const Work: React.FC = () => (
  <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
    <div className="mb-12 flex items-end justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
        Selected Work
      </h2>
      <a
        href="#"
        className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-300 transition hover:text-violet-300"
      >
        View archive <ArrowUpRight size={12} />
      </a>
    </div>

    <div className="grid gap-10 md:grid-cols-2 md:gap-12">
      {PROJECTS.map((p) => (
        <a key={p.title} href="#" className={`group block ${p.offset}`}>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-zinc-900">
            <Img
              src={p.image}
              alt={p.title}
              className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <div className="mt-5 flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-zinc-100 sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{p.category}</p>
            </div>
            <ArrowUpRight
              size={14}
              className="mt-2 text-zinc-500 transition group-hover:text-violet-300"
            />
          </div>
        </a>
      ))}
    </div>
  </section>
);

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSent(false);
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: connect to your backend / form service (Formspree, Resend, etc.)
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-md border border-white/5 bg-white/[0.06] px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400";
  const label =
    "text-[10px] font-semibold uppercase tracking-widest text-zinc-300";

  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
    >
      <div>
        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl lg:text-6xl">
          LET&apos;S
          <span className="block text-violet-400/80">CREATE</span>
          TOGETHER
        </h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
          Currently accepting new projects for Q4. Reach out if you want to
          build something exceptional.
        </p>
        <ul className="mt-8 space-y-3 text-xs text-zinc-300">
          <li className="flex items-center gap-3">
            <Mail size={14} className="text-zinc-400" />
            <a
              href="mailto:hello@creative.core"
              className="hover:text-violet-300"
            >
              hello@creative.core
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={14} className="text-zinc-400" />
            Cyberia, Remote
          </li>
        </ul>
      </div>

      <form
        onSubmit={onSubmit}
        className="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur sm:p-8"
      >
        <label className="block">
          <span className={label}>Name</span>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            placeholder="Enter your name"
            className={field}
          />
        </label>
        <label className="mt-5 block">
          <span className={label}>Email</span>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
            className={field}
          />
        </label>
        <label className="mt-5 block">
          <span className={label}>Message</span>
          <textarea
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project"
            className={`${field} resize-none`}
          />
        </label>
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-violet-500/80 py-3 text-[11px] font-bold uppercase tracking-widest text-white transition hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
        >
          Send transmission
        </button>
        <p
          aria-live="polite"
          className="mt-3 min-h-[1rem] text-center text-xs text-emerald-300"
        >
          {sent ? "Message sent. I'll be in touch soon." : ""}
        </p>
      </form>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="rounded-t-3xl bg-black">
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
      <a
        href="#top"
        className="text-xl font-extrabold tracking-tight text-white sm:text-2xl"
      >
        CREATIVE.CORE
      </a>
      <p className="text-[11px] uppercase tracking-wider text-zinc-500">
        © 2026 Creative.Core — Engineered for precision
      </p>
      <ul className="flex flex-wrap gap-6">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              className="text-xs font-semibold text-zinc-300 transition hover:text-violet-300"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

/* -------------------------------------------------------------------------- */
/*  App                                                                       */
/* -------------------------------------------------------------------------- */
const Portfolio: React.FC = () => (
  <div className="min-h-screen scroll-smooth bg-[#16161d] font-['Montserrat',sans-serif] text-zinc-100 antialiased selection:bg-violet-500/40">
    {/* Montserrat — or add this <link> to your index.html instead */}
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
      html { scroll-behavior: smooth; }
      @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } * { transition: none !important; } }
    `}</style>
    <Header />
    <main>
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Portfolio;
