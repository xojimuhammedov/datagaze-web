"use client";

import React from "react";
import img from "@/public/services/organization.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { useModal } from "@/context/ModalContext";

const Organization = () => {
  const { openSalesModal, openDemoModal } = useModal();
  return (
    <section className="w-full py-16 sm:py-20 lg:py-30">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-row flex-1 justify-center items-center bg-white rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] gap-[10px] w-full h-min p-10 relative overflow-hidden border border-[#DEE0E3]">
          <div className="w-full">
            <Image src={img} alt="Img" className="" />
          </div>
          <div className="">
            <h2 className="text-3xl lg:text-4xl font-medium pb-10 max-w-xl">
              Simplified Security for Organizations
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground pb-10">
              Focus on growth while we protect your data. Our solutions are
              designed to secure your systems with ease and efficiency. Get a
              demo today and see how we make data security simpler.
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
      </div>
    </section>
  );
};

export default Organization;
