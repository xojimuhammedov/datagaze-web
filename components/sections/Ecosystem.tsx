"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import security from "@/public/ecosystem/security.svg";
import cyber from "@/public/ecosystem/cyber_center.svg";
import certificate from "@/public/ecosystem/certificate.svg";
import { useModal } from "@/context/ModalContext";
import { useTranslation } from "react-i18next";

export default function Ecosystem() {
  const { t } = useTranslation();
  const { openSalesModal } = useModal();
  const features = [
    {
      icon: <Image src={security} alt="security" />,
      title: t('ecosystem.features.feature1.title'),
      description: t('ecosystem.features.feature1.description'),
    },
    {
      icon: <Image src={cyber} alt="security" />,
      title: t('ecosystem.features.feature2.title'),
      description: t('ecosystem.features.feature2.description'),
    },
    {
      icon: <Image src={certificate} alt="security" />,
      title: t('ecosystem.features.feature3.title'),
      description: t('ecosystem.features.feature3.description'),
    },
  ];

  return (
    <section className="w-full bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col gap-6">
        {/* Top Main Card */}
        <div className="bg-white pt-6 pl-10 rounded-3xl flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-gray-100">
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-start gap-6">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-[1.15]">
              {t('ecosystem.title')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              {t('ecosystem.subtitle')}
            </p>
            <p className="text-gray-500">
              {t('ecosystem.desc')}
            </p>
            <button 
              className="bg-white border border-[#DEE0E3] h-[40px] w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[12px] leading-[16px] font-semibold text-black cursor-pointer flex items-center justify-center gap-1 mt-4 hover:bg-gray-50 transition-colors"
              onClick={openSalesModal}
            >
              {t('ecosystem.talk_sales')}
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <div className="flex-1 w-full md:min-h-[520px] relative">
            <Image
              src="/images/technoImg.svg"
              alt="Dashboard overview"
              className="absolute rounded-br-[24px]"
              fill
            />
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 flex flex-col gap-6 shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-[#14151A] leading-snug">
                {feature.title}
              </h3>
              <p className="text-base font-normal text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
