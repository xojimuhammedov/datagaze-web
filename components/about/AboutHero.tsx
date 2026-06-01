"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-[#F9FAFB] bg-[url('/images/rectangle23.svg')] bg-top bg-no-repeat bg-cover pt-32 pb-20 px-4">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12 mt-20">
        <div 
          className="flex flex-col items-center gap-6 border p-8 rounded-[24px]"
          style={{
            background: 'linear-gradient(108deg, rgb(255, 255, 255) 0%, rgb(235, 245, 253) 100%)',
            boxShadow: 'rgba(255, 255, 255, 0.29) 0px -0.602187px 1.08394px -0.583333px, rgba(255, 255, 255, 0.33) 0px -2.28853px 4.11936px -1.16667px, rgba(255, 255, 255, 0.52) 0px -10px 18px -1.75px'
          }}
        >
          <div className="mb-10">
            <Image
              src="/images/datagaze-logo-full-color-rgb.svg"
              alt="logo"
              width={150}
              height={50}
              className="w-[200px] lg:w-[340px]"
            />
          </div>

          <h2 className="text-3xl lg:text-4xl font-medium text-center mb-8">
            {t("about_hero.title")}
          </h2>

          <p className="text-center text-muted-foreground text-base md:text-lg text-[#5E5E5E]">
            {t("about_hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
