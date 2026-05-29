"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Organizations = () => {
  const { t } = useTranslation();
  const companies = [
    {
      logo: "/organization/bojxona.svg",
      name: "Bojxona",
      url: "https://my.uzbmb.uz/",
    },
    {
      logo: "/organization/ichki_ishlar.svg",
      name: "Ichki ishlar",
      url: "https://milliygvardiya.uz/oz",
    },
    {
      logo: "/organization/gvardiya.svg",
      name: "Milliy gvardiya",
      url: "https://kb.iiv.uz/",
    },
    {
      logo: "/organization/cyber.svg",
      name: "Cyber Security",
      url: "https://dtm.uz",
    },
    {
      logo: "/organization/ies.svg",
      name: "IES",
      url: "https://www.ung.uz/",
    },
    {
      logo: "/organization/ung.svg",
      name: "Neft gaz",
      url: "https://toshkenties.uz/uz/",
    },
    {
      logo: "/organization/oliy_talim.svg",
      name: "Oliy ta'lim",
      url: "https://gov.uz/oz/sanepid",
    },
    {
      logo: "/organization/alfa-invest.webp",
      name: "Alfa Invest",
      url: "#",
    },
    {
      logo: "/organization/uz-gidro.png",
      name: "UzGidro",
      url: "#",
    },
    {
      logo: "/organization/yoshlar.png",
      name: "Yoshlar",
      url: "#",
    },
    {
      logo: "/organization/uzpost.png",
      name: "Uzpost",
      url: "#",
    },
    {
      logo: "/organization/uz-avtoyol.png",
      name: "Uz-Avtoyol",
      url: "#",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 pb-12 md:pb-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-[48px] font-medium leading-[1.2] md:leading-[56px] text-[#14151a] tracking-[-0.01em] max-w-2xl">
            {t('organizations.title')}
          </h2>

          <p className="text-lg md:text-xl text-[#6b6d78] font-medium max-w-2xl">
            {t('organizations.description')}
          </p>
        </div>

        <div 
          className="bg-white rounded-[24px] border-0 border-[#E5E5E5] w-full py-12 px-8 md:py-16 md:px-12"
          style={{ 
            opacity: 1, 
            willChange: 'auto',
            borderWidth: '1px',
            borderColor: 'rgb(229, 229, 229)',
            borderStyle: 'solid'
          }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center">
            {companies.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                target="_blank"
                className="group relative flex flex-col items-center justify-center w-full aspect-square max-h-[100px]"
              >
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className="object-scale-down"
                    fill
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
