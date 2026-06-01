"use client";
import staff_logo from "@/public/staff/staff_logo.svg";
import Image from "next/image";
import staff_img from "@/public/staff/staff.png";
import { useTranslation } from "react-i18next";

const Staff = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 items-center pt-20 lg:pt-40 pb-20">
          <div className="border p-4 rounded-2xl shadow-md">
            <Image src={staff_logo} alt="logo" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">{t("staff.hero_title")}</h1>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
            {t("staff.hero_desc")}
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={staff_img} alt="Siem" className="w-400" />
        </div>
      </div>
    </section>
  );
};

export default Staff;
