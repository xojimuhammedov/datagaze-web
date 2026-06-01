"use client";
import Image from "next/image";
import logo from "@/public/siem/siem_logo.svg";
import siem_img from "@/public/siem/img.svg";
import { useTranslation } from "react-i18next";

const Siem = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 items-center pt-20 lg:pt-40 pb-20">
          <Image src={logo} alt="logo" />
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">{t("siem.hero_title")}</h1>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
            {t("siem.hero_desc")}
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={siem_img} alt="Siem" className="w-400"/>
        </div>
      </div>
    </section>
  );
};

export default Siem;
