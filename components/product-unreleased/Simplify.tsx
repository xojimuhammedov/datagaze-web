import Image from "next/image";
import React from "react";
import globus from "@/public/product-unreleased/cricles.svg";
import stand from "@/public/product-unreleased/stand.svg";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

const Simplify = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center border rounded-2xl bg-white px-10 py-15">
          <div className="relative w-full flex justify-center items-center">
            {/* STAND (pastda) */}
            <Image
              src={stand}
              alt="stand"
              className="absolute bottom-[-20] w-[500px]"
            />

            {/* GLOBUS (ustida) */}
            <Image
              src={globus}
              alt="globus"
              className="relative bottom-20  z-10 w-[400px]"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="px-2 py-1 rounded-2xl bg-[#EBF1FF] flex gap-2 border border-[#D3E1FF] w-fit">
              <p className="bg-white rounded-2xl px-4 text-[#0055FF] text-base font-medium">
                Trial period
              </p>
              <p className="text-[#0055FF] text-base font-medium">
                Get your free trial period
              </p>
            </div>

            <h2 className="font-semibold text-4xl">
              Simplify Your Security Strategy
            </h2>
            <p className="text-base font-normal text-muted-foreground">
              We specialize in safeguarding organizations. Let us protect your
              data, so you can focus on your core mission. Get in touch for a
              consultation today.
            </p>

            <div className="flex gap-3">
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-[40px] w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-[12px] leading-[16px] font-semibold text-white cursor-pointer">
                Get a demo
              </Button>
              <Button className="bg-white border border-[#DEE0E3] h-[40px] w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[12px] leading-[16px] font-semibold text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden">
                Talk with sales
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
