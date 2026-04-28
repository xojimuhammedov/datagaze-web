import React from "react";
import img from "@/public/services/organization.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const Organization = () => {
  return (
    <section className="w-full py-16  sm:py-20 lg:py-30">
      <div className="mx-auto  w-full max-w-7xl">
        <div className="grid grid-cols-2 items-center p-10 border shadow rounded-3xl">
          <div>
            <Image src={img} alt="Img" className="" />
          </div>
          <div className="">
            <h1 className="font-semibold text-4xl pb-10">
              Simplified Security for Organizations
            </h1>
            <p className="text-lg text-muted-foreground pb-10">
              Focus on growth while we protect your data. Our solutions are
              designed to secure your systems with ease and efficiency. Get a
              demo today and see how we make data security simpler.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#0055FF] text-base font-normal rounded-2xl px-4 py-6">
                Get a demo
              </Button>
              <Button
                variant="outline"
                className="border-0 shadow-lg text-base font-normal rounded-2xl px-4 py-6"
              >
                Talk with sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
