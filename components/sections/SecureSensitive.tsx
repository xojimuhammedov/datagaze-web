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
      <style>{`
        @media (min-width: 1024px) {
          .pin-right-browser {
            left: auto !important;
            right: calc(-1 * (max(0px, 50vw - 640px) + 24px)) !important;
          }
        }
      `}</style>
      <div className="mx-auto max-w-7xl px-6">
        <Tabs defaultValue="overview" className="w-full pb-40">
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
                        Datagaze DLP
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
                title: "Secure Your Sensitive Data with Advanced DLP Solutions",
                desc: "Protect your organization from internal threats and prevent data leaks with Datagaze's robust Data Loss Prevention (DLP) technology.",
              },
              {
                title: "Comprehensive Threat Detection and Response with SIEM",
                desc: "Enhance your cybersecurity posture by identifying and responding to threats in real-time using Datagaze's powerful SIEM tools.",
              },
              {
                title: "Streamlined Security Audits and Compliance Reporting",
                desc: "Generate comprehensive reports and ensure regulatory compliance seamlessly with Datagaze's advanced auditing features.",
              },
              {
                title: "Comprehensive Staff Monitoring and Management System",
                desc: "Enhance your workforce efficiency by tracking activities, managing tasks, and responding to issues in real-time with our powerful staff management tools.",
              },
            ];

            return (
            <TabsContent key={val} value={val} className="outline-none">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
                <div className="z-10 py-6 lg:py-20 lg:col-span-7">
                  <h2 className="text-4xl font-semibold leading-[1.1] text-gray-900 mb-8 tracking-tight max-w-2xl">
                    {tabContents[idx].title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {tabContents[idx].desc}
                  </p>
                </div>

                <div className="relative w-full h-[500px] lg:h-[712px] lg:col-span-5">
                  <div
                    className="absolute top-0 left-0 w-full lg:w-[572px] h-full lg:h-[712px] pin-right-browser"
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
          );
        })}
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
