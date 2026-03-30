import { useTranslation } from "react-i18next";

export function useLocalizedPath() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (path) => {
    if (lang === "en") return path;
    // If path already has a lang prefix, return as-is
    if (path.startsWith(`/${lang}/`) || path === `/${lang}`) return path;
    return `/${lang}${path}`;
  };
}
