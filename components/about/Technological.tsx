"use client"

import Image from "next/image";
import icon1 from "@/public/logos/icon1.svg";
import icon2 from "@/public/logos/icon2.svg";
import icon3 from "@/public/logos/icon3.svg";
import icon4 from "@/public/logos/icon4.svg";
import icon5 from "@/public/logos/icon5.svg";
import icon6 from "@/public/logos/icon6.svg";
import person from "@/public/texnological/photo.avif";
import d1 from "@/public/texnological/d1.svg";
import { useTranslation } from "react-i18next";

const Technological = () => {
  const { t } = useTranslation();
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <section className="w-full py-20 pt-40">
      <div className="mx-auto max-w-6xl px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
          <div className="grid grid-cols-3 gap-4 w-fit place-items-center mx-auto lg:mx-0">
            {icons?.map((icon, i) => (
              <div
                key={i}
                className={`flex items-center justify-center rounded-2xl shadow-[0px_8px_24px_0px_#0000000A] bg-white p-6 ${i % 2 === 0 ? "w-[90px] h-[90px] md:w-[104px] md:h-[104px]" : "w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                  }`}
              >
                <Image src={icon} alt={`partner logo ${i + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5 items-center lg:items-start">
            <h2 className="text-2xl md:text-4xl text-center lg:text-start font-medium pb-4">
              {t("technological.title")}
            </h2>
            <p className="text-base font-normal text-center lg:text-start">
              {t("technological.description")}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-12">
        <div className="bg-white rounded-[20px] p-5 flex items-center flex-col lg:flex-row gap-15 mt-30 border">
          <div>
            <Image
              src={person}
              alt="person"
              width={850}
              height={320}
              className=" object-cover rounded-2xl border shrink-0"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Image src={d1} alt="quote" width={90} height={90} />
            <p className="text-lg lg:text-xl font-normal">
              {t("technological.quote")}
            </p>

            <span className="text-lg lg:text-xl text-muted-foreground">
              Azamjon Nabijonov <br /> {t("technological.cto")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technological;
