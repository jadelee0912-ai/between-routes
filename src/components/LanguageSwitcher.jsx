import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { supportedLanguages } from "../i18n";

const flags = {
  GB: (
    <svg viewBox="0 0 640 480" width="20" height="15" className="rounded-sm">
      <path fill="#012169" d="M0 0h640v480H0z"/>
      <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
      <path fill="#C8102E" d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"/>
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
    </svg>
  ),
  ES: (
    <svg viewBox="0 0 640 480" width="20" height="15" className="rounded-sm">
      <path fill="#AA151B" d="M0 0h640v480H0z"/>
      <path fill="#F1BF00" d="M0 120h640v240H0z"/>
    </svg>
  ),
  FR: (
    <svg viewBox="0 0 640 480" width="20" height="15" className="rounded-sm">
      <path fill="#002654" d="M0 0h213.3v480H0z"/>
      <path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#CE1126" d="M426.7 0H640v480H426.7z"/>
    </svg>
  ),
  RU: (
    <svg viewBox="0 0 640 480" width="20" height="15" className="rounded-sm">
      <path fill="#FFF" d="M0 0h640v160H0z"/>
      <path fill="#0039A6" d="M0 160h640v160H0z"/>
      <path fill="#D52B1E" d="M0 320h640v160H0z"/>
    </svg>
  ),
};

export default function LanguageSwitcher({ variant = "dark" }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const currentLang = supportedLanguages.find((l) => l.code === i18n.language) || supportedLanguages[0];

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLanguage = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);

    // Update the URL to reflect the new language
    const pathParts = location.pathname.split("/").filter(Boolean);
    const langCodes = supportedLanguages.map((l) => l.code);
    // Remove existing lang prefix if present
    if (langCodes.includes(pathParts[0])) {
      pathParts.shift();
    }
    const newPath = code === "en" ? `/${pathParts.join("/")}` : `/${code}/${pathParts.join("/")}`;
    navigate(newPath + location.hash);
  };

  const isDark = variant === "dark";
  const btnClasses = isDark
    ? "text-white/85 hover:text-white border-white/20 hover:border-white/40 bg-white/5"
    : "text-stone-600 hover:text-stone-900 border-stone-200 hover:border-stone-400 bg-white";
  const dropClasses = isDark
    ? "bg-stone-900/95 backdrop-blur border-white/10"
    : "bg-white border-stone-200 shadow-lg";
  const itemClasses = isDark
    ? "text-white/80 hover:text-white hover:bg-white/10"
    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50";
  const activeClasses = isDark ? "bg-white/10 text-white" : "bg-stone-100 text-stone-900";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition ${btnClasses}`}
        aria-label="Select language"
      >
        {flags[currentLang.flag]}
        <span className="hidden sm:inline">{currentLang.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className={`absolute right-0 top-full mt-2 z-50 min-w-[160px] rounded-2xl border p-1.5 ${dropClasses}`}>
          {supportedLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition ${
                lang.code === i18n.language ? activeClasses : itemClasses
              }`}
            >
              {flags[lang.flag]}
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
