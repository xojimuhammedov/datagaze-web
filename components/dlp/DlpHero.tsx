import logo from "@/public/dlp/dlp_logo.svg";
import Image from "next/image";
import dlp_img1 from "@/public/dlp/img1.svg";
import { useTranslation } from "react-i18next";

const DlpHero = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 items-center pt-20 lg:pt-40 pb-20">
          <Image src={logo} alt="logo" />
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">{t("dlp.hero_title")}</h1>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
            {t("dlp.hero_desc")}
          </p>
        </div>

        <div>
          <Image src={dlp_img1} alt="dlp" />
        </div>
      </div>
    </section>
  );
};

export default DlpHero;
