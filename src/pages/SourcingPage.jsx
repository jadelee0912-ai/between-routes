import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SourcingFaqWidget from "../components/SourcingFaqWidget";

// Numéro WhatsApp (format international, sans + ni espaces). +86 150 0212 0586
const WHATSAPP_NUMBER = "8615002120586";
const WHATSAPP_HELLO = encodeURIComponent(
  "Bonjour ! Je tiens une boutique et je cherche un fournisseur en Chine. Pouvez-vous m'aider ?"
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_HELLO}`;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/meerderw";

export default function SourcingPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours…");

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      objective: "Demande de sourcing (Afrique → Chine)",
      _subject: "Nouvelle demande de sourcing",
      name: formData.get("name"),
      country: formData.get("country"),
      whatsapp: formData.get("whatsapp"),
      email: formData.get("email"),
      products: formData.get("products"),
      volume: formData.get("volume"),
      details: formData.get("details"),
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("Merci ! Nous revenons vers vous sous 24–48 h.");
        form.reset();
        window.brTrack?.("lead_form_submit", { location: "form" });
      } else {
        setStatus("Une erreur est survenue. Réessayez ou écrivez-nous par e-mail.");
      }
    } catch {
      setStatus("Une erreur est survenue. Réessayez ou écrivez-nous par e-mail.");
    }
  };

  const steps = [
    {
      n: "01",
      title: "Dites-nous ce que vous vendez",
      desc: "Décrivez vos produits et vos volumes. Pas besoin de connaître le fournisseur — c'est notre travail de le trouver.",
    },
    {
      n: "02",
      title: "Nous trouvons et vérifions l'usine",
      desc: "Sur place en Chine, nous identifions les fabricants sérieux, négocions le prix et la quantité minimale, et écartons les arnaques.",
    },
    {
      n: "03",
      title: "Nous contrôlons la qualité",
      desc: "Vos marchandises sont inspectées avant l'expédition. Fini la loterie : vous savez ce que vous recevez.",
    },
    {
      n: "04",
      title: "Expédition et paiement gérés",
      desc: "Nous organisons la logistique jusqu'à votre pays et sécurisons le paiement entre l'Afrique et la Chine.",
    },
  ];

  const pains = [
    {
      title: "Stocks limités",
      desc: "Sur AliExpress et Temu, la quantité en rayon est faible. Impossible de réapprovisionner sérieusement votre boutique.",
    },
    {
      title: "Délais interminables",
      desc: "Vous attendez des semaines. Vos clients, eux, n'attendent pas — ils achètent ailleurs.",
    },
    {
      title: "Qualité au hasard",
      desc: "Sans contrôle, chaque commande est un pari. Un mauvais lot, et c'est votre réputation qui paie.",
    },
  ];

  const reasons = [
    {
      title: "Nous parlons votre langue",
      desc: "Service en français, pensé pour les commerçants d'Afrique de l'Ouest et francophone.",
    },
    {
      title: "Nous sommes sur place",
      desc: "Une équipe en Chine, dans les villes d'usines : Guangzhou, Yiwu, Shenzhen. Des yeux sur vos produits, pas un simple site web.",
    },
    {
      title: "La confiance d'abord",
      desc: "Recommandés de bouche à oreille par des commerçants qui nous font déjà confiance pour leurs achats.",
    },
    {
      title: "Du fournisseur au paiement",
      desc: "Sourcing, contrôle qualité, logistique et solution de paiement Afrique–Chine : une seule chaîne, un seul interlocuteur.",
    },
  ];

  return (
    <div className="min-h-screen bg-warm-light text-stone-900">
      <Helmet>
        <html lang="fr" />
        <title>Sourcing Chine → Afrique | Trouvez vos fournisseurs avec Between Routes</title>
        <meta
          name="description"
          content="Vous tenez une boutique en Afrique et achetez sur AliExpress ou Temu ? Nous trouvons les usines en Chine, contrôlons la qualité et gérons l'expédition. Service en français, équipe sur place."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sourcing Chine → Afrique | Between Routes" />
        <meta
          property="og:description"
          content="Trouvez vos fournisseurs en Chine, en toute confiance. Sourcing, contrôle qualité et logistique pour les commerçants d'Afrique."
        />
        <meta property="og:site_name" content="Between Routes" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-stone-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 500px at 80% -10%, rgba(184,134,11,0.30), transparent 60%), linear-gradient(155deg, rgba(28,25,23,0.94) 0%, rgba(34,30,27,0.86) 50%, rgba(58,47,29,0.72) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 text-white">
          <div className="flex items-center justify-between py-6">
            <img src="/logo-white.png" alt="Between Routes" className="h-24 md:h-28 w-auto object-contain -ml-4" />
            <a href="mailto:hello@betweenrouteschina.com" className="text-sm text-white/80 hover:text-white">
              hello@betweenrouteschina.com
            </a>
          </div>

          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-amber-200/90 backdrop-blur">
                Sourcing Chine → Afrique
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Vos fournisseurs en Chine,<br className="hidden md:block" /> trouvés et vérifiés pour vous.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
                Vous tenez une boutique et vous commandez sur AliExpress ou Temu ? Stocks limités, longues
                attentes, qualité au hasard. Nous vous donnons un accès direct aux usines chinoises et à
                leurs <span className="text-amber-200">produits les plus tendance</span> — contrôlés,
                expédiés, livrés. Pour que vos rayons soient toujours pleins, et toujours en avance.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.brTrack?.("whatsapp_click", { location: "hero" })}
                  className="inline-flex items-center gap-2.5 rounded-2xl bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5b] hover:shadow-lg hover:-translate-y-0.5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>
                  Discuter sur WhatsApp
                </a>
                <a
                  href="#demande"
                  className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
                >
                  Ou remplir le formulaire
                </a>
              </div>
              <p className="mt-5 text-sm text-white/60">
                Réponse rapide sur WhatsApp · Service en français · Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Le problème</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Acheter en Chine ne devrait pas être un pari.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-stone-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS — key differentiator */}
      <section className="border-y border-stone-200 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-amber-700">Notre avantage</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Les produits qui cartonnent en Chine, avant vos concurrents.
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-700 md:text-lg">
                Nous suivons en direct ce qui se vend le mieux dans les usines et les marchés de gros
                chinois — gadgets, mode, beauté, maison, électronique. Vous ne vous contentez pas de
                réapprovisionner : vous proposez à vos clients les nouveautés <em>avant</em> tout le
                monde sur votre marché.
              </p>
              <ul className="mt-7 space-y-3 text-base text-stone-800">
                <li className="flex gap-3"><span className="text-amber-700">→</span> Les tendances repérées à la source, pas copiées sur Temu trois mois plus tard.</li>
                <li className="flex gap-3"><span className="text-amber-700">→</span> Accès aux usines des marques chinoises les plus en vue.</li>
                <li className="flex gap-3"><span className="text-amber-700">→</span> Sélections adaptées à ce qui se vend vraiment sur votre marché africain.</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Gadgets & tech", img: "photo-1572569511254-d8f925fe2cbb" },
                { label: "Mode & accessoires", img: "photo-1445205170230-053b83016050" },
                { label: "Beauté & soins", img: "photo-1596462502278-27bfdc403348" },
                { label: "Maison & déco", img: "photo-1556228453-efd6c1ff04f6" },
              ].map((c) => (
                <div key={c.label} className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-sm">
                  <div className="relative h-32">
                    <img
                      src={`https://images.unsplash.com/${c.img}?auto=format&fit=crop&w=600&q=80`}
                      alt={c.label}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-3 top-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-800 backdrop-blur">
                      Tendance
                    </div>
                  </div>
                  <div className="p-5 text-lg font-medium text-stone-900">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Comment ça marche</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Quatre étapes, un seul interlocuteur.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((item) => (
              <div key={item.n} className="rounded-[28px] border border-stone-200 bg-stone-50 p-8">
                <div className="text-2xl font-semibold text-amber-700">{item.n}</div>
                <h3 className="mt-3 text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-base leading-8 text-stone-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Pourquoi nous</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Un pont de confiance entre l'Afrique et la Chine.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reasons.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-stone-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCING TRIPS TEASER */}
      <section className="border-y border-stone-200 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-amber-300/80">Bientôt</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Venez voir les usines de vos propres yeux.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                Nous organisons des voyages d'achat à Guangzhou, Yiwu et Shenzhen : marchés de gros, usines,
                négociation et logistique, accompagnés par notre équipe sur place. Choisissez vos produits
                directement à la source.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=80"
                alt="Port de conteneurs en Chine"
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <p className="p-8 text-base leading-8 text-white/80">
                Intéressé par un voyage d'achat ? Indiquez-le dans le formulaire — nous vous préviendrons en
                priorité dès l'ouverture des inscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="demande" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Votre demande</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Dites-nous ce que vous cherchez.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              Décrivez vos produits et vos volumes. Nous revenons vers vous sous 24–48 h avec les premières
              pistes de fournisseurs. Gratuit et sans engagement.
            </p>
            <div className="mt-6 text-sm text-stone-600">
              Ou écrivez-nous directement :{" "}
              <a href="mailto:hello@betweenrouteschina.com" className="text-amber-700 underline">
                hello@betweenrouteschina.com
              </a>
            </div>
          </div>

          <form className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" name="name" placeholder="Votre nom" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="text" name="country" placeholder="Votre pays" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="email" name="email" required placeholder="E-mail" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
              <input type="text" name="whatsapp" placeholder="WhatsApp" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <div className="mt-5">
              <input type="text" name="products" placeholder="Quels produits souhaitez-vous acheter ?" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <div className="mt-5">
              <input type="text" name="volume" placeholder="Volume / budget approximatif (facultatif)" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <div className="mt-5">
              <textarea name="details" rows={5} placeholder="Détails utiles : références, quantité minimale souhaitée, intérêt pour un voyage d'achat…" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-700" />
            </div>

            <button type="submit" className="mt-6 rounded-2xl bg-amber-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-amber-600 hover:shadow-md hover:-translate-y-0.5">
              Envoyer ma demande
            </button>

            {status && <p className="mt-4 text-sm text-stone-600">{status}</p>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <img src="/logo-white.png" alt="Between Routes" className="h-10 w-auto object-contain" />
            <a href="mailto:hello@betweenrouteschina.com" className="text-sm text-white/60 hover:text-white transition">
              hello@betweenrouteschina.com
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/40">
            © {new Date().getFullYear()} Between Routes · Sourcing & approvisionnement Chine–Afrique
          </div>
        </div>
      </footer>

      <SourcingFaqWidget whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}
