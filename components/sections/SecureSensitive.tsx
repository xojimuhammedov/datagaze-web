"use client";
import img1 from "@/public/sensitive/img1.avif";
import img2 from "@/public/sensitive/img2.avif";
import img3 from "@/public/sensitive/img3.avif";
import img4 from "@/public/sensitive/img4.avif";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import logo1 from "@/public/logos/logo1.svg";
import logo2 from "@/public/logos/logo2.svg";
import logo3 from "@/public/logos/logo3.svg";
import logo4 from "@/public/logos/logo4.svg";

import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

export const SecureSensitive = () => {
  const { t } = useTranslation();
  const statistics = [
    {
      number: "6+",
      name: t('secure_sensitive.statistics.stat1.name'),
      description: t('secure_sensitive.statistics.stat1.description'),
    },
    {
      number: "15000+",
      name: t('secure_sensitive.statistics.stat2.name'),
      description: t('secure_sensitive.statistics.stat2.description'),
    },
    {
      number: "25+",
      name: t('secure_sensitive.statistics.stat3.name'),
      description: t('secure_sensitive.statistics.stat3.description'),
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      <style>{`
        @media (min-width: 1024px) {
          .pin-right-browser {
            left: auto !important;
            right: calc(-1 * (max(0px, 50vw - 640px) + 24px)) !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <Tabs defaultValue="overview" className="w-full pb-24 lg:pb-40">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-[#eeeff1] px-1 py-7 h-auto rounded-2xl border border-gray-100 shadow-inner">
              {["overview", "analytics", "reports", "settings"].map(
                (val, idx) => (
                  <TabsTrigger
                    key={val}
                    value={val}
                    className="group data-[state=active]:bg-white data-[state=active]:shadow-md py-6 px-8 rounded-2xl transition-all duration-500 active:scale-[0.96]"
                  >
                    <div className="flex gap-2 items-center cursor-pointer transition-transform duration-500 ease-out group-data-[state=active]:scale-[1.04]">
                      <Image
                        src={[logo1, logo2, logo3, logo4][idx]}
                        alt="logo"
                        width={30}
                        height={33}
                        className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 group-data-[state=active]:scale-110 group-data-[state=active]:rotate-0"
                      />
                      <span className="font-medium text-gray-800 text-base transition-colors duration-500 group-data-[state=active]:text-black">
                        Datagaze {["DLP", "SIEM", "Reports", "Staff"][idx]}
                      </span>
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
          </div>

          {["overview", "analytics", "reports", "settings"].map((val, idx) => {
            const tabContents = [
              {
                title: t('secure_sensitive.tabs.tab1.title'),
                desc: t('secure_sensitive.tabs.tab1.description'),
              },
              {
                title: t('secure_sensitive.tabs.tab2.title'),
                desc: t('secure_sensitive.tabs.tab2.description'),
              },
              {
                title: t('secure_sensitive.tabs.tab3.title'),
                desc: t('secure_sensitive.tabs.tab3.description'),
              },
              {
                title: t('secure_sensitive.tabs.tab4.title'),
                desc: t('secure_sensitive.tabs.tab4.description'),
              },
            ];

            return (
              <TabsContent key={val} value={val} className="outline-none">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-4 lg:gap-0">
                  <div className="z-10 py-4 lg:py-20 lg:col-span-7">
                    <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-8 tracking-tight max-w-2xl">
                      {tabContents[idx].title}
                    </h2>
                    <p className="text-sm lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                      {tabContents[idx].desc}
                    </p>
                  </div>

                  <div className="relative w-full h-[500px] lg:h-[712px] lg:col-span-5">
                    <div className="absolute top-0 left-0 w-full lg:w-[572px] h-full lg:h-[712px] pin-right-browser">
                      <div className="relative w-full h-full">
                        <Image
                          src={[img1, img2, img3, img4][idx]}
                          alt="DLP Interface"
                          fill
                          className="object-cover rounded-xl lg:rounded-l-[20px] border border-gray-200"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="border bg-white p-4 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-2 shadow-md rounded-3xl">
          {statistics.map((item, index) => {
            const number = parseInt(item.number.replace("+", ""));
            return (
              <div key={index} className="p-4 flex flex-col gap-4 lg:gap-6">
                <div className="text-4xl text-center font-semibold">
                  <CountUp
                    end={number}
                    duration={1}
                    enableScrollSpy
                    scrollSpyOnce={false}
                  />
                  +
                </div>

                <h2 className="text-center font-medium text-base">
                  {item.name}
                </h2>

                <p className="text-muted-foreground text-sm text-center">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
