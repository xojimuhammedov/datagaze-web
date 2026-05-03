"use client";

import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { useModal } from "@/context/ModalContext";
import { useTranslation } from "react-i18next";

const ImpactNumbers = () => {
  const { t } = useTranslation();
  const { openSalesModal, openDemoModal } = useModal();
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-30 flex flex-col items-center text-center gap-6">
          <h2 className="text-5xl sm:text-4xl lg:text-5xl max-w-3xl font-medium leading-tight text-gray-900">
            {t('impact_numbers.title')}
          </h2>

          <p className="text-2xl font-medium  sm:text-lg text-gray-600 max-w-2xl">
            {t('impact_numbers.description')}
          </p>

          <div className="flex gap-3">
            <Button 
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-[40px] w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-[12px] leading-[16px] font-semibold text-white cursor-pointer"
              onClick={openDemoModal}
            >
              {t('impact_numbers.get_demo')}
            </Button>
            <Button 
              className="bg-white border border-[#DEE0E3] h-[40px] w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[12px] leading-[16px] font-semibold text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden"
              onClick={openSalesModal}
            >
              {t('impact_numbers.talk_sales')}
              <GoArrowUpRight />
            </Button> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
