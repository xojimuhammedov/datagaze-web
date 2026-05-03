"use client";
import { useTranslation } from "react-i18next";

export default function SecuritySolutions() {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center gap-6">
        <h2 className="text-5xl sm:text-4xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900 pb-4">
          {t('security_solutions.title')}
        </h2>

        <p className="text-[22px] text-muted-foreground max-w-2xl">
          {t('security_solutions.description')}
        </p>
      </div>
    </section>
  );
}
