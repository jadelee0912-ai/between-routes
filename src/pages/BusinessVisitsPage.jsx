import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BusinessVisitsPage() {
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
      objective: "Business & industry visit",
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
        <title>China Business & Industry Visits – Factory Tours, Sourcing Trips | Between Routes</title>
        <meta name="description" content="Curated China business travel for founders, buyers, and teams. Factory visits, sourcing routes, Canton Fair support, and market immersion trips designed around your objective." />
        <link rel="canonical" href="https://www.betweenrouteschina.com/china-business-visits" />
        <meta property="og:title" content="China Business & Industry Visits – Factory Tours, Sourcing Trips | Between Routes" />
        <meta property="og:description" content="Curated China business travel for founders, buyers, and teams. Factory visits, sourcing routes, and market immersion trips designed around your objective." />
        <meta property="og:url" content="https://www.betweenrouteschina.com/china-business-visits" />
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
                Business & Industry Visits
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                China trips designed around business purpose.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                For founders, buyers, teams, investors, and partners looking to understand suppliers, industries, trade fairs, or the market on the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">What we arrange</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Practical support for business travel in China.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
            <p>We help shape business visits that are clearer, more focused, and easier to execute.</p>
            <p>This may include factory visits, supplier meetings, sourcing routes, market immersion, city planning, translation support, or combining trade fairs with more targeted site visits.</p>
            <p>The goal is not just to move through a schedule, but to make the trip more useful and better designed.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Factory and supplier visits",
            "Trade fair and sourcing support",
            "Business travel routes shaped around your objective",
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Typical use cases</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A few business visit formats.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Sourcing & Supplier Trips",
                desc: "Built for brands, buyers, and founders who need efficient routes across factories, clusters, and meetings.",
              },
              {
                title: "Trade Fair Extensions",
                desc: "Go beyond the fair itself with site visits, follow-up meetings, and city-to-city coordination.",
              },
              {
                title: "Market Immersion Visits",
                desc: "For teams who want to understand retail, operations, manufacturing, or design ecosystems in China.",
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
              Tell us what kind of business visit you need.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              Share your objective, cities, and timing, and we'll come back with the right next step.
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
              <textarea name="details" rows={5} placeholder="Tell us more about your objective" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
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
