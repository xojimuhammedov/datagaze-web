"use client";

import { ReactNode, useEffect, useState } from "react";
import "@/lib/i18n";
import { useTranslation } from "react-i18next";

export default function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
}
