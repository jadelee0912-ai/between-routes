import { useState } from "react";

// Lightweight instant-FAQ widget. No backend: preset Q&A + handoff to WhatsApp.
// Upgrade path: swap the preset answers for a call to an AI agent endpoint.
const FAQ = [
  {
    q: "Combien ça coûte ?",
    a: "Le devis est gratuit. Nous nous rémunérons par une commission sur la commande, annoncée à l'avance. Aucune surprise.",
  },
  {
    q: "Quels produits pouvez-vous trouver ?",
    a: "Presque tout ce qui se fabrique en Chine : mode, électronique, gadgets, beauté, maison, accessoires… Dites-nous ce que vous vendez.",
  },
  {
    q: "Y a-t-il une quantité minimale ?",
    a: "Elle dépend du produit et de l'usine. Nous négocions pour vous, et nous pouvons regrouper des commandes pour atteindre le minimum.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "Nous travaillons avec une solution de paiement sécurisée entre l'Afrique et la Chine. On vous explique étape par étape.",
  },
  {
    q: "Comment vérifiez-vous la qualité ?",
    a: "Vos marchandises sont inspectées en Chine avant l'expédition. Vous savez ce que vous recevez avant de payer le transport.",
  },
  {
    q: "Quels sont les délais ?",
    a: "Cela dépend du produit et du mode de transport (avion ou bateau). Nous vous donnons une estimation claire dès le devis.",
  },
];

export default function SourcingFaqWidget({ whatsappLink }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {open && (
        <div className="mb-3 w-[88vw] max-w-sm overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
          <div className="bg-stone-900 px-5 py-4 text-white">
            <div className="text-base font-semibold">Une question ?</div>
            <div className="mt-0.5 text-xs text-white/70">Réponses immédiates · ou parlez-nous sur WhatsApp</div>
          </div>

          <div className="max-h-[55vh] overflow-y-auto p-3">
            {FAQ.map((item, i) => (
              <div key={item.q} className="border-b border-stone-100 last:border-0">
                <button
                  onClick={() => setActive(active === i ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-2 py-3 text-left text-sm font-medium text-stone-800 hover:text-amber-700"
                >
                  <span>{item.q}</span>
                  <span className="text-amber-700">{active === i ? "−" : "+"}</span>
                </button>
                {active === i && (
                  <p className="px-2 pb-4 text-sm leading-7 text-stone-600">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-stone-100 p-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/></svg>
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Aide et questions"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-700 text-white shadow-xl transition hover:bg-amber-600 hover:-translate-y-0.5"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        )}
      </button>
    </div>
  );
}
