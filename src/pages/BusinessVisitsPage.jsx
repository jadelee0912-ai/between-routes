import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocalizedPath } from "../hooks/useLocalizedPath";
import { supportedLanguages } from "../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function BusinessVisitsPage() {
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
      objective: "Business & industry visit",
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
  const pagePath = "/china-business-visits";
  const currentPath = i18n.language === "en" ? pagePath : `/${i18n.language}${pagePath}`;
  const canonicalUrl = `${baseUrl}${currentPath}`;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Helmet>
        <html lang={i18n.language} />
        <title>{t("businessPage.seo.title")}</title>
        <meta name="description" content={t("businessPage.seo.description")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t("businessPage.seo.title")} />
        <meta property="og:description" content={t("businessPage.seo.description")} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:site_name" content="Between Routes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("businessPage.seo.title")} />
        <meta name="twitter:description" content={t("businessPage.seo.description")} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" />
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
            "url": "https://www.betweenrouteschina.com/china-business-visits",
            "description": "Curated China business travel for founders, buyers, and teams. Factory visits, sourcing routes, Canton Fair support, and market immersion trips.",
            "areaServed": "China",
            "serviceType": ["Business Travel", "Factory Visits", "Sourcing Trips", "Canton Fair Support", "Market Immersion"]
          }
        `}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
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
                <LanguageSwitcher />
                <Link to={lp("/")} className="text-sm text-white/85 hover:text-white">
                  {t("nav.backToHome")}
                </Link>
              </div>
            </div>
          </div>

          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                {t("businessPage.badge")}
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                {t("businessPage.title")}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                {t("businessPage.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("businessPage.sectionLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("businessPage.sectionTitle")}
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
            <p>{t("businessPage.p1")}</p>
            <p>{t("businessPage.p2")}</p>
            <p>{t("businessPage.p3")}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            t("businessPage.feature1"),
            t("businessPage.feature2"),
            t("businessPage.feature3"),
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("businessPage.casesLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("businessPage.casesTitle")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: t("businessPage.case1.title"),
                desc: t("businessPage.case1.desc"),
              },
              {
                title: t("businessPage.case2.title"),
                desc: t("businessPage.case2.desc"),
              },
              {
                title: t("businessPage.case3.title"),
                desc: t("businessPage.case3.desc"),
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">{t("businessPage.formLabel")}</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t("businessPage.formTitle")}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              {t("businessPage.formSubtitle")}
            </p>
          </div>

          <form className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" name="name" placeholder={t("contact.name")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="company" placeholder={t("contact.company")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="email" name="email" required placeholder={t("contact.email")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="whatsapp" placeholder={t("contact.whatsapp")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input type="text" name="cities" placeholder={t("contact.cities")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="timing" placeholder={t("contact.timing")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <div className="mt-5">
              <textarea name="details" rows={5} placeholder={t("businessPage.detailsPlaceholder")} className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <button type="submit" className="mt-6 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">
              {t("contact.submit")}
            </button>

            {status && <p className="mt-4 text-sm text-stone-600">{status}</p>}
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <img src="/logo-dark.png" alt="Between Routes" className="h-10 w-auto object-contain" />
              <p className="mt-4 text-sm leading-7 text-stone-600 max-w-xs">
                {t("footer.desc")}
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-3">{t("footer.services")}</div>
              <nav className="flex flex-col gap-2 text-sm text-stone-600">
                <Link to={lp("/china-cultural-journeys")} className="hover:text-stone-900">{t("footer.culturalJourneys")}</Link>
                <Link to={lp("/china-business-visits")} className="hover:text-stone-900">{t("footer.businessVisits")}</Link>
                <Link to={lp("/tailor-made-china-travel")} className="hover:text-stone-900">{t("footer.tailorTravel")}</Link>
                <Link to={lp("/bespoke-experiences-china")} className="hover:text-stone-900">{t("footer.bespokeExp")}</Link>
              </nav>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-3">{t("footer.contact")}</div>
              <div className="flex flex-col gap-2 text-sm text-stone-600">
                <Link to={lp("/#contact")} className="hover:text-stone-900">{t("footer.sendInquiry")}</Link>
                <a href="mailto:hello@betweenrouteschina.com" className="text-stone-500 text-xs hover:text-stone-900 transition">hello@betweenrouteschina.com</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2 md:flex-row md:justify-between text-xs text-stone-400">
            <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
            <Link to={lp("/")} className="hover:text-stone-600">betweenrouteschina.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
