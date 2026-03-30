import { useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const targetLang = lang || "en";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
    document.documentElement.lang = targetLang;
  }, [lang, i18n]);

  return <Outlet />;
}
