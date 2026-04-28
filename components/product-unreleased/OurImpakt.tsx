import React from "react";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import impakt from "@/public/product-unreleased/impackt.svg";
import Image from "next/image";

const OurImpakt = () => {
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
    <section className="w-full py-20  bg-[#F8F8F8] ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-30 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl max-w-3xl font-medium leading-tight text-gray-900">
            Our Impact in Numbers
          </h1>

          <p className="text-[22px]  text-gray-600 max-w-2xl">
            Discover the numbers behind our success and the impact we make
            through our expertise and innovative solutions.
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

        <div className="bg-white p-12 rounded-2xl border flex relative min-h-[550px] overflow-hidden">
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="font-semibold text-5xl">4X</h1>
            <h1 className="font-semibold text-xl">Better low-lights photos</h1>
            <p className="font-normal text-lg text-muted-foreground w-150">
              Use a set of text and color styles, customize and apply changes to
              all pages at once. Create a unique look in just a few minutes.
            </p>

            <Button
              variant="outline"
              className="py-5 px-4 cursor-pointer rounded-2xl shadow w-45"
            >
              <span className="text-base font-normal">Talk with sales</span>
              <GoArrowUpRight />
            </Button>
          </div>

          <div className="absolute right-0 top-0  ">
            <Image src={impakt} alt="Img" className="w-auto h-auto" priority />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
          {data.map((item, index) => (
            <div key={index} className=" p-6 flex flex-col gap-3">
              <h1 className="text-4xl font-semibold text-center">
                {item.title}
              </h1>

              <h2 className="text-[22px] font-medium text-center">{item.name}</h2>

              <p className="text-xl text-muted-foreground text-center w-75 mx-auto">
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
