"use client";

import React from "react";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import impakt from "@/public/product-unreleased/impackt.svg";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

const OurImpakt = () => {
  const { openSalesModal, openDemoModal } = useModal();
  const data = [
    {
      title: "4x",
      name: "Sharper, brighter macro shots",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "2x",
      name: "Highest-quality video",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
    {
      title: "4K HDR",
      name: "The film industry standard",
      description:
        "Design better and spend less time without restricting creative freedom.",
    },
  ];

  return (
    <section className="w-full py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
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

        <div className="bg-white p-6 lg:p-12 rounded-2xl border flex relative min-h-72 lg:min-h-[550px] overflow-hidden">
          <div className="flex flex-col gap-6 justify-center">
            <div className="font-semibold text-4xl lg:text-5xl">4X</div>
            <h3 className="font-semibold text-lg lg:text-xl">Better low-lights photos</h3>
            <p className="font-normal text-sm lg:text-lg text-muted-foreground w-full lg:w-150">
              Use a set of text and color styles, customize and apply changes to
              all pages at once. Create a unique look in just a few minutes.
            </p>

            <Button 
              className="bg-white border border-[#DEE0E3] h-10 w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-xs font-medium text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden"
              onClick={openSalesModal}
            >
              Talk with sales
              <GoArrowUpRight />
            </Button>
          </div>

          <div className="hidden lg:block absolute right-0 top-0 bottom-0">
            <Image src={impakt} alt="Img" className="w-full lg:w-auto h-auto" priority />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 pt-10">
          {data.map((item, index) => (
            <div key={index} className="p-6 flex flex-col gap-3">
              <h3 className="text-3xl lg:text-4xl font-semibold text-center">
                {item.title}
              </h3>

              <h2 className="text-base lg:text-xl font-medium text-center">{item.name}</h2>

              <p className="text-sm lg:text-lg text-muted-foreground text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpakt;
