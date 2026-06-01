"use client";
import str from "@/public/product-unreleased/star.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Stars = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Image key={i} src={str} alt="Star" />
            ))}
          </div>
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            {t("unreleased.quote")}
          </h2>

          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 lg:w-[86px] lg:h-[86px] bg-[#D9D9D9] rounded-full text-center"></div>
            <p className="text-center text-base lg:text-xl font-medium">Elon Musk</p>
            <p className="text-muted-foreground text-base lg:text-xl">{t("unreleased.musk_title")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stars;
