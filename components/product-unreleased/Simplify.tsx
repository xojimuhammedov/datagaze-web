import Image from "next/image";
import React from "react";
import globus from "@/public/product-unreleased/cricles.svg";
import stand from "@/public/product-unreleased/stand.svg";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

const Simplify = () => {
  return (
    <section className="w-full py-20  bg-[#F8F8F8] ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-2 items-center border rounded-2xl bg-white px-10 py-15">
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

          <div className="flex flex-col gap-10 ">
            <div className="px-2 py-1 rounded-2xl bg-[#EBF1FF] flex gap-2 border border-[#D3E1FF] w-fit">
              <p className="bg-white rounded-2xl px-4 text-[#0055FF] text-base font-medium">
                Trial period
              </p>
              <p className="text-[#0055FF] text-base font-medium">
                Get your free trial period
              </p>
            </div>

            <h1 className="font-semibold text-4xl ">
              Simplify Your Security Strategy
            </h1>
            <p className="text-base font-normal text-muted-foreground">
              We specialize in safeguarding organizations. Let us protect your
              data, so you can focus on your core mission. Get in touch for a
              consultation today.
            </p>

            <div className="flex gap-3">
              <Button className="py-5 px-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-base font-normal rounded-2xl">
                Get a demo
              </Button>
              <Button
                variant="outline"
                className="py-5 px-4 cursor-pointer rounded-2xl shadow"
              >
                <span className="text-base font-normal">Talk with sales</span>
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
