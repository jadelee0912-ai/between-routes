import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function BespokeExperiencesPage() {
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
      objective: "Bespoke experience",
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
        <title>Bespoke China Experiences – Private & Curated Travel | Between Routes</title>
        <meta name="description" content="Private cultural encounters, special-interest journeys, and high-touch travel design in China. For those who want something more distinctive than a standard itinerary." />
        <link rel="canonical" href="https://www.betweenrouteschina.com/bespoke-experiences-china" />
        <meta property="og:title" content="Bespoke China Experiences – Private & Curated Travel | Between Routes" />
        <meta property="og:description" content="Private cultural encounters, special-interest journeys, and high-touch travel design in China. For those who want something more distinctive." />
        <meta property="og:url" content="https://www.betweenrouteschina.com/bespoke-experiences-china" />
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
                Bespoke Experiences
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                More distinctive ways into China.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                For travelers or teams looking for something more private, more considered, and less standard than what most itineraries can offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">What bespoke means</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Curated around rarity, access, and intention.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-stone-700">
            <p>Bespoke experiences are for requests that go beyond a standard travel or business route.</p>
            <p>That might mean more private cultural encounters, more carefully staged moments, or journeys shaped around a very specific objective, theme, or audience.</p>
            <p>The focus is on relevance, quality, and thoughtfulness — not scale.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Private cultural encounters",
            "Curated moments designed around a specific brief",
            "Travel and project concepts that need more flexibility and discretion",
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
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">Possible directions</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A few bespoke possibilities.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Private Cultural Access",
                desc: "Experiences designed around smaller, quieter, more exclusive forms of cultural engagement.",
              },
              {
                title: "Special-interest Journeys",
                desc: "Routes built around a theme, a passion, a niche subject, or a specific kind of audience.",
              },
              {
                title: "High-touch Travel Design",
                desc: "For journeys where sequencing, discretion, quality, and experience design matter more than volume.",
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
              Tell us what kind of bespoke experience you have in mind.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              Share your idea, cities, and timing, and we'll come back with the right next step.
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
              <textarea name="details" rows={5} placeholder="Tell us more about your idea" className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900" />
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
