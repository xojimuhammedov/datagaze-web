"use client"

import img2 from "@/public/dlp/img2.svg";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const IntelligenceDlp = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="bg-white p-6 border rounded-2xl flex flex-col gap-10 items-center">
          <h2 className="text-4xl lg:text-5xl font-medium w-full lg:w-150 text-center">
            {t("dlp.ai_title")}
          </h2>
          <p className="w-full lg:w-175 text-lg lg:text-xl text-muted-foreground text-center">
            {t("dlp.ai_desc")}
          </p>

          <Image src={img2} alt="photo" className="w-350"/>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceDlp;
