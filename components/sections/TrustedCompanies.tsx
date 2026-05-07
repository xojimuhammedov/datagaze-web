"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useTranslation } from "react-i18next";

export default function TrustedCompanies() {
  const { t } = useTranslation();
  const companies = [
    "/trusted_organization/dtm.svg",
    "/trusted_organization/ichki_ishlar.svg",
    "/trusted_organization/milliy_gvardiya.svg",
    "/trusted_organization/neft_gaz.svg",
    "/trusted_organization/ies.svg",
    "/trusted_organization/cyber_security.svg",
    "/trusted_organization/salomatlik.svg",
  ];

  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-4 overflow-hidden">
        <h2 className="text-center text-sm md:text-base font-medium ">
          {t('trusted_companies.title')}
        </h2>

        <div className="relative w-full">
          {/* Chap tomondagi fade effekti */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-80 bg-gradient-to-r from-[#F7F7F8] to-transparent z-10" />

          {/* O'ng tomondagi fade effekti */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-[#F7F7F8] to-transparent z-10" />

          <Carousel
            opts={{
              loop: true,
              align: "start",
            }}
            // 2. Plaginni sozlash
            plugins={[
              AutoScroll({
                speed: 1, // Harakat tezligi
                stopOnInteraction: false,
                stopOnMouseEnter: true, // Sichqoncha ustiga kelganda to'xtashi uchun (ixtiyoriy)
              }),
            ]}
            className="w-full max-w-none"
          >
            <CarouselContent className="-ml-1 md:-ml-4 flex items-center bg-[#F7F7F8]">
              {[...companies, ...companies].map((img, index) => (
                <CarouselItem
                  key={`company-${index}`}
                  className="basis-1/4 md:basis-1/7 lg:basis-1/9 transition-none!">
                  <div className="px-2 py-2 flex items-center justify-center">
                    <Image
                      src={img}
                      alt="logo"
                      width={80}
                      height={60}
                      className="object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
