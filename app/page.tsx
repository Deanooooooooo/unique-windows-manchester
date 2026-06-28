"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import {
  ArrowUpRight,
  CheckCircle2,
  DoorOpen,
  Facebook,
  Home,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assets = (name: string) => `${basePath}/assets/${name}`;

const businessName = "Unique Windows";
const email = "uniquewindowsmcr@gmail.com";
const phoneDisplay = "07712 764914";
const phoneHref = "tel:07712764914";
const facebookUrl = "https://www.facebook.com/uniquewindows1";
const facebookReviewsUrl = "https://www.facebook.com/uniquewindows1/reviews";
const address = "Manchester, M44 6";
const serviceArea = "Manchester and the North West";
const mailSubject = "Windows and doors enquiry";
const mailBody = [
  "Hi Unique Windows,",
  "",
  "I would like to enquire about windows or doors.",
  "",
  "Name:",
  "Phone:",
  "Postcode:",
  "Project type:",
  "Preferred timescale:",
  "Message:",
].join("\n");
const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

const services = [
  {
    icon: Home,
    title: "Windows",
    body: "Replacement windows for homes across the North West, fitted with a clean finish and practical advice on style, security and light.",
  },
  {
    icon: DoorOpen,
    title: "Doors",
    body: "Front, rear and patio door options fitted for everyday use, curb appeal, insulation and home security.",
  },
  {
    icon: Ruler,
    title: "Bifold doors",
    body: "Made-to-measure bifolds designed to open up living spaces and create a smoother indoor-outdoor flow.",
  },
  {
    icon: Wrench,
    title: "Full installation",
    body: "A family-run team handling the measure, supply and fit with clear communication before the job starts.",
  },
];

const gallery = [
  {
    src: "unique-hero.jpg",
    title: "Black frame glazing",
    body: "A real Unique Windows project showing modern glazing against a traditional brick property.",
  },
  {
    src: "unique-logo.jpg",
    title: "Windows and doors",
    body: "Composite door and window installation work with a clean finish around the frame.",
  },
  {
    src: "unique-bifold.jpg",
    title: "Bifold door service",
    body: "Bifold doors for more light, security and usable living space.",
  },
];

const proof = [
  "Family-run window and door team with over 20 years in the trade.",
  "Mobile and email contact routes are available for window and door enquiries.",
  "North West coverage stated publicly on the business page.",
];

const testimonials = [
  {
    name: "Tracey Stewart",
    source: "Customer review",
    body: "Had a full house of windows and doors from Unique Windows. Graham was professional, helpful, did an excellent job and went above and beyond.",
  },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const main = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -58]);
  const detailY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.04, smoothWheel: true, syncTouch: false });
    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gsap-rise", {
        y: 42,
        opacity: 0,
        duration: 0.82,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 72%" },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: businessName,
    image: assets("unique-hero.jpg"),
    url: "https://deanooooooooo.github.io/unique-windows-manchester/",
    telephone: phoneDisplay,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manchester",
      postalCode: "M44 6",
      addressCountry: "GB",
    },
    areaServed: ["Manchester", "North West England"],
    sameAs: [facebookUrl, facebookReviewsUrl],
  };

  return (
    <main ref={main} className="min-h-screen overflow-hidden text-iron">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/12 bg-[#101722]/92 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-white shadow-sm">
              <Image src={assets("unique-logo.jpg")} alt="Unique Windows logo" fill className="object-cover" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-base font-black uppercase">Unique Windows</span>
              <span className="text-sm font-bold text-white/68">Windows and doors</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-base font-black text-white/86 md:flex">
            <a className="hover:text-white" href="#services">Services</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#reviews">Reviews</a>
          </nav>
          <a href={mailtoUrl}>
            <Button className="min-h-11 rounded-lg bg-[#52b4e8] px-4 text-[#101722] hover:bg-white">
              <Mail size={17} />
              <span className="hidden sm:inline">Send enquiry</span>
              <span className="sm:hidden">Enquire</span>
            </Button>
          </a>
        </div>
      </header>

      <section id="top" className="hero-clip relative min-h-[1040px] bg-[#101722] pt-24 text-white md:min-h-[850px]">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image src={assets("unique-hero.jpg")} alt="Black frame window and door installation" fill priority className="object-cover opacity-88" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#101722]/96 via-[#101722]/72 to-[#101722]/30" />
        <div className="room-vignette absolute inset-0" />
        <motion.div style={{ y: detailY }} className="absolute -right-20 top-28 h-72 w-72 rounded-full bg-[#52b4e8]/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-28 pt-16 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center md:pt-24">
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/18 bg-black/58 px-4 py-2 text-xs font-black uppercase tracking-normal text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur">
                <ShieldCheck size={16} /> Family run for over 20 years
              </p>
              <h1 className="max-w-4xl text-[clamp(2.85rem,5.65vw,5.65rem)] font-black leading-[0.97]">
                Windows and doors fitted with a clean, secure finish.
              </h1>
              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-white/80">
                Unique Windows helps homeowners across {serviceArea} upgrade windows, doors and bifolds with practical advice, tidy installation and reliable aftercare.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={mailtoUrl}>
                  <Button className="rounded-lg bg-[#52b4e8] text-[#101722] hover:bg-white">
                    <Mail size={18} /> Start an enquiry
                  </Button>
                </a>
                <a href="#reviews">
                  <Button variant="secondary" className="rounded-lg border-white/18 bg-white/10 text-white hover:bg-white/18">
                    Reviews <ArrowUpRight size={18} />
                  </Button>
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Windows", "Doors", "Bifolds"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/14 bg-black/34 px-4 py-3 text-sm font-black text-white/84 backdrop-blur">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="rounded-2xl border border-white/14 bg-[#101722]/88 p-5 shadow-[0_32px_110px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-[#52b4e8]">Windows and doors enquiry</p>
                  <h2 className="mt-1 text-3xl font-black leading-tight">Tell Unique what needs fitting.</h2>
                </div>
                <MessageSquareText className="text-[#52b4e8]" size={30} />
              </div>
              <form action={`mailto:${email}`} method="post" encType="text/plain" className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Name
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition placeholder:text-iron/42 focus:ring-4" name="name" placeholder="Your name" required />
                  </label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Email
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition placeholder:text-iron/42 focus:ring-4" name="email" type="email" placeholder="you@email.com" required />
                  </label>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Phone
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition placeholder:text-iron/42 focus:ring-4" name="phone" placeholder="Best number" />
                  </label>
                  <label className="grid gap-1.5 text-sm font-black text-white/78">
                    Postcode
                    <input className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition placeholder:text-iron/42 focus:ring-4" name="postcode" placeholder="M44..." />
                  </label>
                </div>
                <label className="grid gap-1.5 text-sm font-black text-white/78">
                  Project type
                  <select className="min-h-12 rounded-lg border border-white/12 bg-white px-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition focus:ring-4" name="project_type" defaultValue="Windows">
                    <option>Windows</option>
                    <option>Front or rear door</option>
                    <option>Bifold doors</option>
                    <option>Patio or sliding doors</option>
                    <option>Full house</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm font-black text-white/78">
                  Message
                  <textarea className="min-h-28 rounded-lg border border-white/12 bg-white px-3 py-3 text-base font-bold text-iron outline-none ring-[#52b4e8]/45 transition placeholder:text-iron/42 focus:ring-4" name="message" placeholder="Tell them what needs replacing, rough sizes and any preferred style or timescale." required />
                </label>
                <Button className="min-h-13 rounded-lg bg-[#52b4e8] text-base font-black text-[#101722] hover:bg-white">
                  <Send size={18} /> Compose email enquiry
                </Button>
                <p className="text-sm font-semibold leading-6 text-white/62">
                  Opens your email app addressed to {email}. For quick questions, call {phoneDisplay}.
                </p>
              </form>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="services" className="bg-[#f4f6f8] px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-black uppercase text-[#1c6f9d]">What they fit</p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Practical upgrades for warmer, brighter homes.</h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-iron/68">
              The best window and door projects are simple for the customer: clear options, careful measuring, quality products and a finish that looks right on the house.
            </p>
          </Reveal>
          <div className="services-grid mt-12 grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="gsap-rise rounded-lg border-0 bg-white shadow-premium">
                <CardContent className="p-6">
                  <service.icon className="mb-7 text-[#1c6f9d]" size={34} />
                  <h3 className="text-2xl font-black">{service.title}</h3>
                  <p className="mt-4 text-base font-semibold leading-7 text-iron/64">{service.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#101722] px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase text-[#52b4e8]">Project visuals</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Window and door work with tidy, practical finishes.</h2>
            </div>
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              <Button variant="secondary" className="rounded-lg bg-white text-[#101722] hover:bg-[#52b4e8]">
                View business page <ArrowUpRight size={18} />
              </Button>
            </a>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.src} delay={index * 0.04}>
                <article className="overflow-hidden rounded-lg bg-white text-iron shadow-[0_26px_80px_rgba(0,0,0,0.25)]">
                  <div className="relative aspect-[4/3]">
                    <Image src={assets(item.src)} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black">{item.title}</h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-iron/62">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg bg-white p-4 shadow-premium">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#f4f6f8]">
                <Image src={assets("unique-bifold.jpg")} alt="Unique Windows bifold doors information" fill className="object-contain" />
              </div>
              <div className="flex items-center justify-between gap-4 px-2 py-5">
                <p className="text-sm font-black uppercase text-[#1c6f9d]">Bifold doors</p>
                <p className="text-sm font-bold text-iron/58">Light, security and usable space</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase text-[#1c6f9d]">Customer testimonial</p>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Customer proof for the work people notice every day.</h2>
              <p className="mt-5 text-lg font-semibold leading-8 text-iron/68">
                Windows and doors are visible every day, so a strong installation should feel tidy, secure and properly finished once the work is complete.
              </p>
              <div className="mt-8 grid gap-4">
                {testimonials.map((testimonial) => (
                  <article key={testimonial.name} className="rounded-lg border border-iron/10 bg-[#f4f6f8] p-6">
                    <p className="text-xl font-black leading-8 text-iron">&quot;{testimonial.body}&quot;</p>
                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-iron/10 pt-5">
                      <div>
                        <p className="font-black">{testimonial.name}</p>
                        <p className="text-sm font-bold text-iron/52">{testimonial.source}</p>
                      </div>
                      <CheckCircle2 className="text-[#1c6f9d]" size={24} />
                    </div>
                  </article>
                ))}
                {proof.map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border border-iron/10 bg-white p-4">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#1c6f9d]" size={22} />
                    <p className="font-bold leading-7 text-iron/72">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-[#eaf2f7] px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="text-sm font-black uppercase text-[#1c6f9d]">Contact</p>
                <h2 className="mt-3 text-4xl font-black leading-tight sm:text-6xl">Start with the windows, doors or bifolds you need pricing.</h2>
              </div>
              <div className="mt-8 grid gap-3">
                <a className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium" href={mailtoUrl}>
                  <Mail className="text-[#1c6f9d]" size={22} /> {email}
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium" href={phoneHref}>
                  <Phone className="text-[#1c6f9d]" size={22} /> {phoneDisplay}
                </a>
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 font-black shadow-premium">
                  <MapPin className="text-[#1c6f9d]" size={22} /> {address} · {serviceArea}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#101722] px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-white">
              <Image src={assets("unique-logo.jpg")} alt="Unique Windows logo" fill className="object-cover" />
            </span>
            <div>
              <p className="text-lg font-black">{businessName}</p>
              <p className="text-sm font-semibold text-white/58">{address} · {serviceArea}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a aria-label="Email Unique Windows" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#52b4e8] hover:text-[#101722]" href={mailtoUrl}>
              <Mail size={20} />
            </a>
            <a aria-label="Call Unique Windows" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#52b4e8] hover:text-[#101722]" href={phoneHref}>
              <Phone size={20} />
            </a>
            <a aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#52b4e8] hover:text-[#101722]" href={facebookUrl} target="_blank" rel="noreferrer">
              <Facebook size={20} />
            </a>
            <a aria-label="Facebook reviews" className="grid h-11 w-11 place-items-center rounded-lg bg-white/10 text-white hover:bg-[#52b4e8] hover:text-[#101722]" href={facebookReviewsUrl} target="_blank" rel="noreferrer">
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
