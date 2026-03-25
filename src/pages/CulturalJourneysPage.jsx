import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CulturalJourneysPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      objective: "Cultural journey",
      cities: formData.get("cities"),
      timing: formData.get("timing"),
      details: formData.get("details"),
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
        setStatus("Thanks — your inquiry has been sent.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Helmet>
        <title>Cultural Journeys in China – Tea, Heritage & Local Experiences | Between Routes</title>
        <meta name="description" content="Explore China through tea culture, traditional medicine, craft, and heritage. Tailor-made cultural journeys in China designed around depth, not checklists." />
        <meta name="keywords" content="China cultural travel, tea tour China, Chinese heritage journey, traditional medicine China, cultural immersion China, Yunnan travel, Hangzhou tea culture, China craft tour, slow travel China" />
        <link rel="canonical" href="https://www.betweenrouteschina.com/china-cultural-journeys" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cultural Journeys in China – Tea, Heritage & Local Experiences | Between Routes" />
        <meta property="og:description" content="Explore China through tea culture, traditional medicine, craft, and heritage. Tailor-made cultural journeys designed around depth, not checklists." />
        <meta property="og:url" content="https://www.betweenrouteschina.com/china-cultural-journeys" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:site_name" content="Between Routes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cultural Journeys in China – Tea, Heritage & Local Experiences" />
        <meta name="twitter:description" content="Explore China through tea culture, traditional medicine, craft, and heritage. Tailor-made cultural journeys designed around depth." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Between Routes",
            "url": "https://www.betweenrouteschina.com/china-cultural-journeys",
            "description": "Explore China through tea culture, traditional medicine, craft, and heritage. Tailor-made cultural journeys in China designed around depth, not checklists.",
            "areaServed": "China",
            "serviceType": ["Cultural Journeys", "Tea Tours", "Heritage Travel", "Traditional Medicine Tours"]
          }
        `}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-7xl px-2 py-6 text-white">
          <div className="relative z-20 w-full">
            <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
              <Link to="/" className="flex items-center -ml-8">
                <img
                  src="/logo-white.png"
                  alt="Between Routes"
                  className="h-30 md:h-32 w-auto object-contain"
                />
              </Link>
              <Link to="/" className="text-sm text-white/85 hover:text-white">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="py-20 md:py-28">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                Cultural Journeys in China
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Explore China through culture, not checklists.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                From tea mountains and traditional medicine to local craft and slower rituals, these journeys are designed for travelers who want a deeper, more thoughtful way into China.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">What this includes</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Cultural travel with more depth.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
            <p>Our cultural journeys go beyond sightseeing. They are built around context, pacing, and meaningful local encounters.</p>
            <p>Depending on your interests, a route might include tea culture, traditional Chinese medicine, food traditions, heritage towns, crafts, architecture, or modern cultural scenes in cities like Shanghai and Shenzhen.</p>
            <p>Each trip is shaped around what you want to understand, not just what you want to see.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Tea culture journeys in Hangzhou, Wuyi, or Yunnan",
            "Traditional Chinese medicine and wellness-led travel",
            "Craft, heritage, food, and slower local experiences",
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Journey ideas</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A few cultural starting points.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Tea & Mountain Landscapes",
                desc: "Slow travel through tea-growing regions, tastings, local stays, and cultural rituals tied to landscape and craft.",
              },
              {
                title: "Wellness & Chinese Wisdom",
                desc: "A route shaped around movement, balance, daily rituals, Chinese wellness practices, and restorative pacing.",
              },
              {
                title: "Heritage & Local Life",
                desc: "Historic towns, architecture, crafts, and food traditions approached with more intimacy and less rush.",
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Start Your Journey</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Tell us what kind of cultural journey you're looking for.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              Share your interests, cities, and timing, and we'll come back with the right next step.
            </p>
          </div>

          <form className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input type="text" name="name" placeholder="Name" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="company" placeholder="Company" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="email" name="email" required placeholder="Email" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="whatsapp" placeholder="WhatsApp" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <input type="text" name="cities" placeholder="Preferred cities" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
              <input type="text" name="timing" placeholder="Dates / timeframe" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <div className="mt-5">
              <textarea name="details" rows={5} placeholder="Tell us more about your interests" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
            </div>

            <button type="submit" className="mt-6 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5">
              Start Your Journey
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
                Tailored China experiences for culture seekers, business travelers, and anyone who wants a more thoughtful way in.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-3">Services</div>
              <nav className="flex flex-col gap-2 text-sm text-stone-600">
                <Link to="/china-cultural-journeys" className="hover:text-stone-900">Cultural Journeys</Link>
                <Link to="/china-business-visits" className="hover:text-stone-900">Business Visits</Link>
                <Link to="/tailor-made-china-travel" className="hover:text-stone-900">Tailor-made Travel</Link>
                <Link to="/bespoke-experiences-china" className="hover:text-stone-900">Bespoke Experiences</Link>
              </nav>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-3">Contact</div>
              <div className="flex flex-col gap-2 text-sm text-stone-600">
                <Link to="/#contact" className="hover:text-stone-900">Send an inquiry</Link>
                <span className="text-stone-400 text-xs">WhatsApp preferred</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col gap-2 md:flex-row md:justify-between text-xs text-stone-400">
            <span>© {new Date().getFullYear()} Between Routes. All rights reserved.</span>
            <Link to="/" className="hover:text-stone-600">betweenrouteschina.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
