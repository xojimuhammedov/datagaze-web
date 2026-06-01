"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useModal } from "@/context/ModalContext";

import { useTranslation } from "react-i18next";

const Organization = () => {
  const { t } = useTranslation();
  const { openSalesModal, openDemoModal } = useModal();
  return (
    <section className="w-full py-12 lg:py-30">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] w-full h-min p-4 lg:p-10 relative overflow-hidden border border-[#DEE0E3]">
          <div className="w-full relative z-10">
            {/* Desktop Animation */}
            <div className="hidden lg:block w-full h-[496px] rounded-3xl overflow-hidden relative">
              {/* Rectangle 11 (Eng kattasi) */}
              <Image
                src="/animation/Rectangle 11.png"
                alt=""
                width={478}
                height={471}
                className="absolute bottom-0 left-0 z-10"
              />

              {/* Rectangle 12 (1) */}
              <Image
                src="/animation/Rectangle 12 (1).png"
                alt=""
                width={388}
                height={382}
                className="absolute bottom-0 left-0 z-20"
              />
              <div className="absolute top-[70px] left-[34px] z-20 w-[85px] h-[85px] origin-icon-4 animate-orbit-ccw">
                <div className="w-full h-full rounded-[127.5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center animate-counter-orbit-ccw">
                  <Image src="/animation/4.png" alt="" width={41} height={41} />
                </div>
              </div>
              <div className="absolute top-[239px] left-[315px] z-20 w-[85px] h-[85px] origin-icon-5 animate-orbit-ccw">
                <div className="w-full h-full rounded-[127.5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center animate-counter-orbit-ccw">
                  <Image src="/animation/5.png" alt="" width={55} height={34} />
                </div>
              </div>

              {/* Rectangle 13 */}
              <Image
                src="/animation/Rectangle 13.png"
                alt=""
                width={303}
                height={296}
                className="absolute bottom-0 left-0 z-30"
              />
              <div className="absolute top-[183px] left-[141px] z-30 w-[85px] h-[85px] origin-icon-2 animate-orbit-cw">
                <div className="w-full h-full rounded-[127.5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center animate-counter-orbit-cw">
                  <Image src="/animation/2.png" alt="" width={42} height={42} />
                </div>
              </div>
              <div className="absolute top-[377px] left-[258px] z-30 w-[85px] h-[85px] origin-icon-3 animate-orbit-cw">
                <div className="w-full h-full rounded-[127.5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center animate-counter-orbit-cw">
                  <Image src="/animation/3.png" alt="" width={49} height={42} />
                </div>
              </div>

              {/* Rectangle 14 (Eng kichigi) */}
              <Image
                src="/animation/Rectangle 14.png"
                alt=""
                width={210}
                height={203}
                className="absolute bottom-0 left-0 z-40"
              />
              <div className="absolute bottom-0 left-0 z-40 w-[177px] h-[177px] rounded-[127.5px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center">
                <Image src="/animation/1.png" alt="" width={91} height={130} />
              </div>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full rounded-3xl overflow-hidden mb-6">
              <Image
                src="/mobile-bg-1.jpg"
                alt="Mobile Background"
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="w-full relative z-10">
            <h2 className="font-medium text-3xl lg:text-4xl pb-5 lg:pb-10 max-w-xl">
              {t("cta_section.title")}
            </h2>
            <p className="text-sm lg:text-lg text-muted-foreground pb-5 lg:pb-10">
              {t("cta_section.description")}
            </p>
            <div className="lg:flex grid grid-cols-2 gap-4">
              <Button 
                className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-[40px] w-full lg:w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-xs leading-[16px] font-medium text-white"
                onClick={openDemoModal}
              >
                {t("cta_section.get_demo")}
              </Button>
              <Button 
                className="bg-white border border-[#DEE0E3] h-[40px] w-full lg:w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-xs leading-[16px] font-medium text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden"
                onClick={openSalesModal}
              >
                {t("cta_section.talk_sales")}
                <GoArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
