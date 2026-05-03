"use client";

import { ReactNode, useEffect } from "react";
import "@/lib/i18n";
import { useTranslation } from "react-i18next";

export default function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Optional: Sync HTML lang attribute with i18next language
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
}
