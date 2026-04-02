import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "../hooks/useLocalizedPath";
import { supportedLanguages } from "../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function BespokeExperiencesPage() {
  const { t, i18n } = useTranslation();
  const lp = useLocalizedPath();
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
      objective: "Bespoke experience",
      cities: formData.get("cities"),
      timing: formData.get("timing"),
      details: formData.get("details"),
      language: i18n.language,
    };

    try {
      const response = await fetch("https://formspree.io/f/meerderw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus(t("contact.success"));
        form.reset();
      } else {
        setStatus(t("contact.error"));
      }
    } catch {
      setStatus(t("contact.error"));
    }
  };

  const baseUrl = "https://www.betweenrouteschina.com";
  const pagePath = "/bespoke-experiences-china";
  const currentPath = i18n.language === "en" ? pagePath : `/${i18n.language}${pagePath}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  return (
    <div className="min-h-screen bg-warm-light text-stone-900">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("bespokePage.seo.title")}</title>
        <meta name="description" content={t("bespokePage.seo.description")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("bespokePage.seo.title")} />
        <meta property="og:description" content={t("bespokePage.seo.description")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1770354227649-059bbfc475db?q=80&w=1200&auto=format&fit=crop" />
        <meta property="og:site_name" content="Between Routes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("bespokePage.seo.title")} />
        <meta name="twitter:description" content={t("bespokePage.seo.description")} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1770354227649-059bbfc475db?q=80&w=1200&auto=format&fit=crop" />
        {supportedLanguages.map((lang) => (
          <link
            key={lang.code}
            rel="alternate"
            hrefLang={lang.code}
            href={`${baseUrl}${lang.code === "en" ? pagePath : `/${lang.code}${pagePath}`}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pagePath}`} />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Between Routes",
            "url": "${canonicalUrl}",
            "description": "Private cultural encounters, special-interest journeys, and high-touch travel design in China.",
            "areaServed": "China",
            "serviceType": ["Bespoke Experiences", "Private Cultural Encounters", "Curated Travel", "Special Interest Tours"]
          }
        `}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1633393150996-97634a006047?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-2 py-6 text-white">
          <div className="relative z-20 w-full">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
              <Link to={lp("/")} className="flex items-center -ml-8">
                <img
                  src="/logo-white.png"
                  alt="Between Routes"
                  className="h-30 md:h-32 w-auto object-contain"
                />
              </Link>
              <div className="flex items-center gap-4">
                <Link to={lp("/")} className="text-sm text-white/85 hover:text-white">
                  {t("nav.backToHome")}
                </Link>
                <LanguageSwitcher variant="dark" />
              </div>
            </div>
          </div>

          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                {t("bespokePage.badge")}
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {t("bespokePage.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                {t("bespokePage.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("bespokePage.sectionLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("bespokePage.sectionTitle")}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
            <p>{t("bespokePage.p1")}</p>
            <p>{t("bespokePage.p2")}</p>
            <p>{t("bespokePage.p3")}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            t("bespokePage.feature1"),
            t("bespokePage.feature2"),
            t("bespokePage.feature3"),
          ].map((item) => (
            <div key={item} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("bespokePage.directionsLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("bespokePage.directionsTitle")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t("bespokePage.direction1.title"),
                desc: t("bespokePage.direction1.desc"),
              },
              {
                title: t("bespokePage.direction2.title"),
                desc: t("bespokePage.direction2.desc"),
              },
              {
                title: t("bespokePage.direction3.title"),
                desc: t("bespokePage.direction3.desc"),
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("bespokePage.formLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("bespokePage.formTitle")}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              {t("bespokePage.formSubtitle")}
            </p>
          </div>

          <form className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" name="name" placeholder={t("contact.name")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="text" name="company" placeholder={t("contact.company")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="email" name="email" required placeholder={t("contact.email")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="text" name="whatsapp" placeholder={t("contact.whatsapp")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input type="text" name="cities" placeholder={t("contact.cities")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="text" name="timing" placeholder={t("contact.timing")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <div className="mt-5">
              <textarea name="details" rows={5} placeholder={t("bespokePage.detailsPlaceholder")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <button type="submit" className="mt-6 rounded-2xl bg-amber-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-600 hover:shadow-md hover:-translate-y-0.5">
              {t("contact.submit")}
            </button>

            {status && <p className="mt-4 text-sm text-stone-600">{status}</p>}
          </form>
        </div>
      </section>

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
                <Link to={lp("/#contact")} className="hover:text-white transition">{t("footer.sendInquiry")}</Link>
                <a href="mailto:hello@betweenrouteschina.com" className="text-white/40 text-xs hover:text-white transition">hello@betweenrouteschina.com</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-2 md:flex-row md:justify-between text-xs text-white/40">
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
            <Link to={lp("/")} className="hover:text-white/60">betweenrouteschina.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
