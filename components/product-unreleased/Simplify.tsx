"use client";

import Image from "next/image";
import React from "react";
import globus from "@/public/product-unreleased/cricles.svg";
import stand from "@/public/product-unreleased/stand.svg";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useModal } from "@/context/ModalContext";
import { useTranslation } from "react-i18next";

const Simplify = () => {
  const { openSalesModal, openDemoModal } = useModal();
  const { t } = useTranslation();
  return (
    <section className="w-full py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center border rounded-2xl bg-white px-4 lg:px-10 py-6 lg:py-10 gap-6">
          <div className="relative flex justify-center items-center">
            {/* STAND (pastda) */}
            <Image
              src={stand}
              alt="stand"
              className="absolute bottom-[-20] w-[200px] lg:w-[500px]"
            />

            {/* GLOBUS (ustida) */}
            <Image
              src={globus}
              alt="globus"
              className="relative bottom-8 lg:bottom-20 z-10 w-[200px] lg:w-[400px]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="px-2 py-1 rounded-2xl bg-[#EBF1FF] flex gap-2 border border-[#D3E1FF] w-full lg:w-fit">
              <p className="bg-white rounded-2xl px-4 text-[#0055FF] text-sm lg:text-base font-medium">
                {t("unreleased.trial_badge")}
              </p>
              <p className="text-[#0055FF] text-sm lg:text-base font-medium">
                {t("unreleased.trial_text")}
              </p>
            </div>

            <h2 className="font-medium text-3xl lg:text-4xl">
              {t("unreleased.simplify_title")}
            </h2>
            <p className="text-sm lg:text-base font-normal text-muted-foreground">
              {t("unreleased.simplify_desc")}
            </p>

            <div className="grid grid-cols-2 lg:flex gap-3">
              <Button 
                className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-10 w-full lg:w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-[12px] leading-[16px] font-medium text-white cursor-pointer"
                onClick={openDemoModal}
              >
                {t("cta_section.get_demo")}
              </Button>
              <Button 
                className="bg-white border border-[#DEE0E3] h-10 w-full lg:w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[12px] leading-[16px] font-medium text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden"
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

export default Simplify;
