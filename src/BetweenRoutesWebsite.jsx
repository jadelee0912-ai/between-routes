import { useState } from "react";
export default function BetweenRoutesWebsite() {
  const services = [
    {
      title: "Culture Journeys",
      desc: "Tea, wellness, food, craft, and local culture—shaped around what you want to experience.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Business Visits",
      desc: "Factory visits, sourcing support, trade fair routes, and executive trips with a clearer plan.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Custom Projects",
      desc: "Tailored solutions for media trips, special-interest travel, VIP hosting, and one-off requests.",
      image:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Tailored Planning",
      desc: "From idea to on-the-ground coordination, we help shape the route that fits your needs.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const journeys = [
    {
      title: "Tea & Mountain Retreats",
      place: "Hangzhou · Wuyi · Yunnan",
      desc: "A slower journey through tea, landscape, and local craft.",
      image:
        "https://images.unsplash.com/photo-1743401439096-dc9b89abb9c7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Wellness & Chinese Wisdom",
      place: "Shanghai · Hangzhou · Chengdu",
      desc: "A softer way into Chinese wellness, movement, and daily rituals.",
      image:
        "https://images.unsplash.com/photo-1519275964328-32bcddd755f6?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Modern China for Curious Minds",
      place: "Shanghai · Shenzhen · Suzhou",
      desc: "Design, innovation, manufacturing, and urban culture in one route.",
      image:
        "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=1400&q=80",
    },
    {
      title: "Trade Fair & Sourcing Routes",
      place: "Canton Fair · Yiwu · Factory Clusters",
      desc: "Focused trips for buyers and teams with clear business goals.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Tell us your goal",
      desc: "Travel, sourcing, learning, or something more specific.",
    },
    {
      num: "02",
      title: "We shape the route",
      desc: "Cities, partners, timing, and flow—designed around your needs.",
    },
    {
      num: "03",
      title: "We help make it happen",
      desc: "With practical coordination before and during the experience.",
    },
  ];
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
    objective: formData.get("objective"),
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
  } catch (error) {
    setStatus("Something went wrong. Please try again.");
  }
};
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 text-white">
          <header className="flex items-center justify-between">
            <div>
              <div className="text-xl font-semibold uppercase tracking-[0.18em]">
                Between Routes
              </div>
              <div className="mt-1 text-sm text-white/80">
                Tailored China Experiences for Culture & Business
              </div>
            </div>
            <nav className="hidden gap-8 text-sm text-white/85 md:flex">
              <a href="#services" className="hover:text-white">
                Solutions
              </a>
              <a href="#journeys" className="hover:text-white">
                Journeys
              </a>
              <a href="#approach" className="hover:text-white">
                Approach
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                Culture · Business · Bespoke
              </div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                China, planned around you.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                Tailored journeys for culture, business, and special interests—from tea and wellness trips to factory visits, trade fairs, and custom routes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-stone-900 shadow-sm transition hover:-translate-y-0.5"
                >
                  Start an Inquiry
                </a>
                <a
                  href="#journeys"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5"
                >
                  Explore Journeys
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">
            Solutions
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Flexible support, depending on what you need.
          </h2>
          <p className="mt-4 text-base leading-8 text-stone-700 md:text-lg">
            Start with one of these and we can tailor the rest.
          </p>
        </div>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {services.map((item) => (
            <div
              key={item.title}
              className="group relative min-w-[300px] max-w-[300px] snap-start overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm md:min-w-[340px] md:max-w-[340px]"
            >
              <div
                className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="journeys" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="text-sm uppercase tracking-[0.18em] text-stone-500">
                Signature Journeys
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                A few ways to begin.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-700 md:text-base">
              Swipe through a few starting points. Every route can be adapted.
            </p>
          </div>

          <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {journeys.map((item) => (
              <div
                key={item.title}
                className="group relative min-w-[320px] max-w-[320px] snap-start overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-sm md:min-w-[420px] md:max-w-[420px]"
              >
                <div
                  className="relative h-[420px] bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/70">
                      {item.place}
                    </div>
                    <h3 className="mt-3 text-2xl font-medium">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/85">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.18em] text-stone-500">
            How It Works
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Simple and tailored.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[28px] border border-stone-200 bg-white p-8 shadow-sm"
            >
              <div className="text-4xl font-semibold tracking-tight text-stone-300">
                {step.num}
              </div>
              <h3 className="mt-5 text-xl font-medium">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-stone-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden border-y border-stone-200 bg-stone-900 text-white"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528164344705-47542687000d?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-white/60">
              About Between Routes
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              A more thoughtful way into China.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-white/80">
            <p>
              Between Routes is built for people who want more than a standard itinerary.
            </p>
            <p>
              We combine local coordination with a more curated, flexible approach—so each experience feels relevant, useful, and well designed.
            </p>
            <p>
              Whether cultural or business-led, the route starts with your objective.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-stone-500">
              Inquiries
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Let’s plan your route.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-stone-700 md:text-lg">
              Share a few details and we’ll come back with the right next step.
            </p>
          </div>

          <form
            className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  WhatsApp
                </label>
                <input
                  type="text"
                  name="whatsapp"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                What are you looking for?
              </label>
              <select
                name="objective"
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              >
                <option>Culture journey</option>
                <option>Business visit</option>
                <option>Trade fair support</option>
                <option>Custom project</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Preferred cities
                </label>
                <input
                  type="text"
                  name="cities"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">
                  Dates / timeframe
                </label>
                <input
                  type="text"
                  name="timing"
                  className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-stone-700">
                Tell us more
              </label>
              <textarea
                name="details"
                rows={5}
                className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-stone-900"
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5"
            >
              Send Inquiry
            </button>

           {status && (
             <p className="mt-4 text-sm text-stone-600">{status}</p>
        )}
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-medium text-stone-900">Between Routes</span>
            <span className="ml-2">
              Tailored China Experiences for Culture & Business
            </span>
          </div>
          <div>Culture journeys, business visits, and tailored projects.</div>
        </div>
      </footer>
    </div>
  );
}