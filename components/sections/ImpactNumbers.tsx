"use client";

import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import { useModal } from "@/context/ModalContext";
import { useTranslation } from "react-i18next";

const ImpactNumbers = () => {
  const { t } = useTranslation();
  const { openSalesModal, openDemoModal } = useModal();
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="flex flex-col items-center text-center gap-6 pb-8 lg:pb-12">
          <h2 className="text-3xl lg:text-5xl max-w-3xl font-medium leading-tight text-gray-900">
            Our Impact in Numbers
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl text-center">
            Discover the numbers behind our success and the impact we make
            through our expertise and innovative solutions.
          </p>

          <div className="grid grid-cols-2 w-full lg:flex justify-center gap-3">
            <Button
              className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-10 w-full lg:w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-xs font-medium text-white cursor-pointer"
              onClick={openDemoModal}
            >
              Get a demo
            </Button>
            <Button
              className="bg-white border border-[#DEE0E3] h-10 w-full lg:w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-xs font-medium text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden"
              onClick={openSalesModal}
            >
              Talk with sales
              <GoArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;
