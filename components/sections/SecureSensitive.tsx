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

export const SecureSensitive = () => {
  const statistics = [
    {
      number: "6+",
      name: "Over 6 Years of Expertise",
      description:
        "Delivering customized cybersecurity solutions across government and business sectors with decades of experience.",
    },
    {
      number: "15000+",
      name: "Devices Secured",
      description:
        "Protecting over 12,000 endpoints with cutting-edge tools designed to prevent data breaches and internal threats.",
    },
    {
      number: "25+",
      name: "Highly Skilled Specialists",
      description:
        "Our expert team crafts advanced solutions to ensure comprehensive data security for your organization.",
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Tabs defaultValue="overview" className="w-full pb-40">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-[#eeeff1] px-1 py-7 h-auto rounded-2xl border border-gray-100 shadow-inner">
              {["overview", "analytics", "reports", "settings"].map(
                (val, idx) => (
                  <TabsTrigger
                    key={val}
                    value={val}
                    className="data-[state=active]:bg-white  data-[state=active]:shadow-md py-6 px-8 rounded-2xl transition-all duration-300"
                  >
                    <div className="flex gap-2 items-center cursor-pointer">
                      <Image
                        src={[logo1, logo2, logo3, logo4][idx]}
                        alt="logo"
                        width={30}
                        height={33}
                      />
                      <span className="font-medium text-gray-800 text-base">
                        Datagaze DLP
                      </span>
                    </div>
                  </TabsTrigger>
                ),
              )}
            </TabsList>
          </div>

          {["overview", "analytics", "reports", "settings"].map((val, idx) => (
            <TabsContent key={val} value={val} className="outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
                <div className="z-10 py-6 lg:py-20 lg:col-span-7">
                  <h2 className="text-4xl font-semibold leading-[1.1] text-gray-900 mb-8 tracking-tight max-w-2xl">
                    Secure Your Sensitive Data with Advanced DLP Solutions
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    Protect your organization from internal threats and prevent
                    data leaks with Datagaze&apos;s robust Data Loss Prevention
                    (DLP) technology.
                  </p>
                </div>

                <div className="relative w-full h-[500px] lg:h-[830px] lg:col-span-5">
                  <div
                    className="absolute top-0 left-0 bottom-0"
                    style={{
                      width: "calc(40vw + 100%)",
                    }}
                  >
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
          ))}
        </Tabs>

        <div className="border bg-white p-10 grid grid-cols-3 gap-2 shadow-md rounded-3xl">
          {statistics.map((item, index) => {
            const number = parseInt(item.number.replace("+", ""));
            return (
              <div key={index} className="p-4">
                <h1 className="text-4xl text-center font-semibold">
                  <CountUp
                    end={number}
                    duration={1}
                    enableScrollSpy
                    scrollSpyOnce={false}
                  />
                  +
                </h1>

                <h2 className="text-center font-medium text-base mt-2">
                  {item.name}
                </h2>

                <p className="text-muted-foreground text-center mt-2">
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
