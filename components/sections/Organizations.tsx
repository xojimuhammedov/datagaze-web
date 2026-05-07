"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Organizations = () => {
  const { t } = useTranslation();
  const companies = [
    {
      logo: "/organization/cyber.svg",
      name: "Cyber Security",
      url: "https://dtm.uz",
      pos: "-top-10 md:-top-[20%] left-1/2 -translate-x-1/2",
      size: "w-32 h-32 md:w-60 md:h-60",
    },
    {
      logo: "/organization/bojxona.svg",
      name: "Bojxona",
      url: "https://my.uzbmb.uz/",
      pos: "top-[15%] left-[5%] md:left-[20%]",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ichki_ishlar.svg",
      name: "Ichki ishlar",
      url: "https://milliygvardiya.uz/oz",
      pos: "top-[15%] right-[5%] md:right-[20%]",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
    {
      logo: "/organization/oliy_talim.svg",
      name: "Oliy ta'lim",
      url: "https://gov.uz/oz/sanepid",
      pos: "top-[50%] -left-4 md:left-[1%] md:top-[70%] -translate-y-1/2",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ung.svg",
      name: "Neft gaz",
      url: "https://toshkenties.uz/uz/",
      pos: "top-[50%] -right-4 md:right-[1%] md:top-[70%] -translate-y-1/2",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ies.svg",
      name: "IES",
      url: "https://www.ung.uz/",
      pos: "bottom-0 md:-bottom-[30%] left-[5%] md:left-[20%]",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
    {
      logo: "/organization/gvardiya.svg",
      name: "Milliy gvardiya",
      url: "https://kb.iiv.uz/",
      pos: "bottom-0 md:-bottom-[30%] right-[5%] md:right-[20%]",
      size: "w-20 h-20 md:w-40 md:h-40",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 pb-32 md:pb-60">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-[48px] font-medium leading-[1.2] md:leading-[56px] text-[#14151a] tracking-[-0.01em] max-w-3xl">
            {t('organizations.title')}
          </h2>

          <p className="text-lg md:text-xl text-[#6b6d78] font-medium max-w-2xl">
            {t('organizations.description')}
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-square sm:aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
          <div className="relative z-20 text-center animate-in fade-in zoom-in duration-1000">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                40+
              </span>
              <span className="text-xl md:text-4xl font-semibold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {t('organizations.orgs_count')}
              </span>
            </div>
          </div>

          <div className="absolute inset-0">
            {companies.map((item, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-500 hover:z-30 ${item.pos}`}
              >
                <Link
                  href={item.url}
                  target="_blank"
                  className="group relative flex flex-col items-center"
                >
                  <div
                    className={`relative flex items-center justify-center backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:-translate-y-2 ${item.size}`}
                  >
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill
                      className="object-contain p-2 md:p-4 transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
