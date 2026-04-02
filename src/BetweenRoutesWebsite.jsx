import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "./hooks/useLocalizedPath";
import { supportedLanguages } from "./i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function BetweenRoutesWebsite() {
  useReveal();
  const { t, i18n } = useTranslation();
  const lp = useLocalizedPath();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: t("services.cultural.title"),
      desc: t("services.cultural.desc"),
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1600&q=80",
      link: lp("/china-cultural-journeys"),
    },
    {
      title: t("services.business.title"),
      desc: t("services.business.desc"),
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      link: lp("/china-business-visits"),
    },
    {
      title: t("services.tailor.title"),
      desc: t("services.tailor.desc"),
      image: "https://images.unsplash.com/photo-1758685292395-af2ea08b4718?auto=format&fit=crop&w=1600&q=80",
      link: lp("/tailor-made-china-travel"),
    },
    {
      title: t("services.bespoke.title"),
      desc: t("services.bespoke.desc"),
      image: "https://images.unsplash.com/photo-1770354227649-059bbfc475db?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: lp("/bespoke-experiences-china"),
    },
  ];

  const journeys = [
    {
      title: t("journeys.tea.title"),
      place: t("journeys.tea.place"),
      desc: t("journeys.tea.desc"),
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
      link: lp("/china-cultural-journeys"),
    },
    {
      title: t("journeys.wellness.title"),
      place: t("journeys.wellness.place"),
      desc: t("journeys.wellness.desc"),
      image: "https://images.unsplash.com/photo-1519275964328-32bcddd755f6?auto=format&fit=crop&w=1200&q=80",
      link: lp("/china-cultural-journeys"),
    },
    {
      title: t("journeys.modern.title"),
      place: t("journeys.modern.place"),
      desc: t("journeys.modern.desc"),
      image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1600&q=80",
      link: lp("/tailor-made-china-travel"),
    },
    {
      title: t("journeys.businessRoutes.title"),
      place: t("journeys.businessRoutes.place"),
      desc: t("journeys.businessRoutes.desc"),
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
      link: lp("/china-business-visits"),
    },
  ];

  const steps = [
    { num: t("approach.step1.num"), title: t("approach.step1.title"), desc: t("approach.step1.desc") },
    { num: t("approach.step2.num"), title: t("approach.step2.title"), desc: t("approach.step2.desc") },
    { num: t("approach.step3.num"), title: t("approach.step3.title"), desc: t("approach.step3.desc") },
  ];

  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(t("contact.sending"));
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      objective: formData.get("objective"),
      cities: formData.get("cities"),
      timing: formData.get("timing"),
      details: formData.get("details"),
      language: i18n.language,
    };
    try {
      const response = await fetch("https://formspree.io/f/meerderw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) { setStatus(t("contact.success")); form.reset(); }
      else { setStatus(t("contact.error")); }
    } catch {
      setStatus(t("contact.error"));
    }
  };

  const baseUrl = "https://www.betweenrouteschina.com";
  const currentPath = i18n.language === "en" ? "/" : `/${i18n.language}/`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  return (
    <div className="min-h-screen bg-warm-light text-stone-900">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={t("seo.ogTitle")} />
        <meta property="og:description" content={t("seo.ogDescription")} />
        <meta property="og:url" content={canonicalUrl} />
        {supportedLanguages.map((lang) => (
          <link
            key={lang.code}
            rel="alternate"
            hrefLang={lang.code}
            href={`${baseUrl}${lang.code === "en" ? "/" : `/${lang.code}/`}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/`} />
      </Helmet>

      {/* Hero / Header */}
      <section className="relative overflow-hidden">
        <div className="relative z-20 w-full">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link to={lp("/")} className="flex items-center">
              <img src="/logo-white.png" alt="Between Routes" className="h-30 md:h-32 w-auto object-contain" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
              <a href="#services" className="hover:text-white transition">{t("nav.services")}</a>
              <a href="#journeys" className="hover:text-white transition">{t("nav.journeys")}</a>
              <a href="#approach" className="hover:text-white transition">{t("nav.approach")}</a>
              <a href="#about" className="hover:text-white transition">{t("nav.about")}</a>
              <a href="#contact" className="hover:text-white transition">{t("nav.contact")}</a>
              <LanguageSwitcher variant="dark" />
            </nav>

            {/* Mobile: lang + menu */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher variant="dark" />
              <button
                className="flex p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile nav dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-stone-900/95 backdrop-blur border-t border-white/10">
              <div className="flex flex-col px-6 py-4 gap-4 text-sm text-white/90">
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">{t("nav.services")}</a>
                <a href="#journeys" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">{t("nav.journeys")}</a>
                <a href="#approach" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">{t("nav.approach")}</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">{t("nav.about")}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white py-1">{t("nav.contact")}</a>
              </div>
            </div>
          )}
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 text-white">
          <div className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {t("hero.title")}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                {t("hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-2xl bg-amber-700 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md">
                  {t("hero.cta")}
                </a>
                <a href="#journeys" className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20">
                  {t("hero.explore")}
                </a>
              </div>
            </div>
          </div>

          {/* Scroll-down indicator */}
          <div className="pb-8 flex justify-center">
            <a href="#services" className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition group">
              <span className="text-xs uppercase tracking-widest">{t("hero.scrollDown")}</span>
              <svg className="animate-bounce" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24" style={{ background: 'transparent' }}>
        <div className="max-w-2xl reveal">
          <div className="text-sm uppercase tracking-[0.18em] text-amber-800/70">{t("services.label")}</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-700 md:text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="relative mt-12">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {services.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group relative min-w-[300px] max-w-[300px] snap-start overflow-hidden rounded-[28px] border border-stone-200/80 bg-white shadow-sm md:min-w-[340px] md:max-w-[340px] transition hover:shadow-lg hover:-translate-y-1 duration-300 hover:border-amber-200"
              >
                <div
                  className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-700">{item.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-amber-800 group-hover:gap-2 group-hover:text-amber-700 transition-all">
                    {t("services.explore")}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#f5f0ea] to-transparent" />
        </div>
      </section>

      {/* Journeys */}
      <section id="journeys" className="border-y border-amber-100/60 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.18em] text-amber-800/70">{t("journeys.label")}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t("journeys.title")}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-700 md:text-base">
              {t("journeys.subtitle")}
            </p>
          </div>

          <div className="relative mt-12">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
              {journeys.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group relative min-w-[320px] max-w-[320px] snap-start overflow-hidden rounded-[30px] border border-stone-200/80 bg-white shadow-sm md:min-w-[420px] md:max-w-[420px] transition hover:shadow-lg hover:-translate-y-1 duration-300"
                >
                  <div
                    className="relative h-[420px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="text-xs uppercase tracking-[0.16em] text-white/70">{item.place}</div>
                      <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-white/85">{item.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 group-hover:text-white transition">
                        {t("journeys.exploreRoute")}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#fdfbf8] to-transparent" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="approach" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl reveal">
          <div className="text-sm uppercase tracking-[0.18em] text-amber-800/70">{t("approach.label")}</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t("approach.title")}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal accent-top rounded-[28px] border border-stone-200/80 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl font-semibold tracking-tight text-amber-700/70">{step.num}</div>
              <h3 className="mt-5 text-xl font-medium">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden border-y border-amber-900/20 bg-stone-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561031454-4f1331bd2a34?auto=format&fit=crop&w=1600&q=80')" }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="reveal">
            <div className="text-sm uppercase tracking-[0.18em] text-white/60">{t("about.label")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t("about.title")}</h2>
          </div>
          <div className="reveal space-y-5 text-base leading-8 text-white/80">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
            <div className="mt-6 pt-6 border-t border-amber-500/20 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-semibold text-amber-400">100%</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{t("about.stat1")}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-amber-400">4</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{t("about.stat2")}</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-amber-400">Local</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{t("about.stat3")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="reveal">
            <div className="text-sm uppercase tracking-[0.18em] text-amber-800/70">{t("contact.label")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{t("contact.title")}</h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              {t("contact.subtitle")}
            </p>
            <div className="mt-8 space-y-3 text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.28 1.18 2 2 0 012.28 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>
                </svg>
                <a href="mailto:hello@betweenrouteschina.com" className="hover:text-stone-900 transition">hello@betweenrouteschina.com</a>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-stone-400 shrink-0">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{t("contact.responseTime")}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61578430649784" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-500 hover:bg-amber-50 hover:text-amber-700 transition" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/betweenrouteschina" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-500 hover:bg-amber-50 hover:text-amber-700 transition" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <form className="reveal rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.name")}</label>
                <input type="text" name="name" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.company")}</label>
                <input type="text" name="company" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.email")}</label>
                <input type="email" name="email" required className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.whatsapp")}</label>
                <input type="text" name="whatsapp" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.objective")}</label>
              <select name="objective" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition">
                <option>{t("contact.options.cultural")}</option>
                <option>{t("contact.options.business")}</option>
                <option>{t("contact.options.tailor")}</option>
                <option>{t("contact.options.bespoke")}</option>
                <option>{t("contact.options.unsure")}</option>
              </select>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.cities")}</label>
                <input type="text" name="cities" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.timing")}</label>
                <input type="text" name="timing" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-stone-700">{t("contact.details")}</label>
              <textarea name="details" rows={5} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700 transition" />
            </div>

            <button type="submit" className="mt-6 rounded-2xl bg-amber-700 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-md">
              {t("contact.submit")}
            </button>
            {status && <p className="mt-4 text-sm text-stone-600">{status}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <img src="/logo-white.png" alt="Between Routes" className="h-10 w-auto object-contain" />
              <p className="mt-4 text-sm leading-7 text-white/60 max-w-xs">
                {t("footer.desc")}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=61578430649784" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/60 hover:bg-amber-700 hover:text-white transition" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/betweenrouteschina" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white/60 hover:bg-amber-700 hover:text-white transition" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-500/80 mb-3">{t("footer.services")}</div>
              <nav className="flex flex-col gap-2 text-sm text-white/60">
                <Link to={lp("/china-cultural-journeys")} className="hover:text-white transition">{t("footer.culturalJourneys")}</Link>
                <Link to={lp("/china-business-visits")} className="hover:text-white transition">{t("footer.businessVisits")}</Link>
                <Link to={lp("/tailor-made-china-travel")} className="hover:text-white transition">{t("footer.tailorTravel")}</Link>
                <Link to={lp("/bespoke-experiences-china")} className="hover:text-white transition">{t("footer.bespokeExp")}</Link>
              </nav>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-amber-500/80 mb-3">{t("footer.contact")}</div>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a href="#contact" className="hover:text-white transition">{t("footer.sendInquiry")}</a>
                <a href="mailto:hello@betweenrouteschina.com" className="text-white/40 text-xs hover:text-white transition">hello@betweenrouteschina.com</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2 md:flex-row md:justify-between text-xs text-white/40">
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
            <span>{t("footer.tagline")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
