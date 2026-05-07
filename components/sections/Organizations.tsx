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
      pos: "top-[-20%] left-[50%] -translate-x-1/2",
      size: "w-40 h-40 md:w-60 md:h-60",
    },
    {
      logo: "/organization/bojxona.svg",
      name: "Bojxona",
      url: "https://my.uzbmb.uz/",
      pos: "top-[20%] left-[20%]",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ichki_ishlar.svg",
      name: "Ichki ishlar",
      url: "https://milliygvardiya.uz/oz",
      pos: "top-[20%] right-[20%]",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
    {
      logo: "/organization/oliy_talim.svg",
      name: "Oliy ta'lim",
      url: "https://gov.uz/oz/sanepid",
      pos: "left-[1%] top-[70%] -translate-y-1/2",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ung.svg",
      name: "Neft gaz",
      url: "https://toshkenties.uz/uz/",
      pos: "right-[1%] top-[70%] -translate-y-1/2",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
    {
      logo: "/organization/ies.svg",
      name: "IES",
      url: "https://www.ung.uz/",
      pos: "bottom-[-30%] left-[20%]",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
    {
      logo: "/organization/gvardiya.svg",
      name: "Milliy gvardiya",
      url: "https://kb.iiv.uz/",
      pos: "bottom-[-30%] right-[20%]",
      size: "w-28 h-28 md:w-40 md:h-40",
    },
  ];

  return (
    <section className="w-full py-20 pb-60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-30 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900">
            {t('organizations.title')}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            {t('organizations.description')}
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center">
          <div className="relative z-20 text-center animate-in fade-in zoom-in duration-1000">
            <div className="flex flex-col items-center pt-40">
              <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                40+
              </span>
              <span className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-700 bg-clip-text text-transparent">
                {t('organizations.orgs_count')}
              </span>
            </div>
          </div>

          {/* items-end yozuvni pastda ushlab turadi */}

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
                      className="object-contain p-4 transition-all duration-300 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
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
