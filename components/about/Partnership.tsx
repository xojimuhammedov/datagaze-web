"use client";

import guvohnoma from "@/public/texnological/guvohnoma.jpg";
import Image from "next/image";
import sertifikat from "@/public/texnological/sertifikat.jpg";
import it_sertifikat from "@/public/texnological/it-park.jpg";

const Partnership = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="pb-8 lg:p-30 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl lg:text-[50px] font-medium text-center text-gray-900 max-w-3xl">
            In Partnership with Leading Organizations
          </h2>

          <p className="text-lg lg:text-xl font-normal text-center text-[#5E5E5E] max-w-2xl">
            We collaborate with numerous large organizations to help them secure
            their data. Our solutions guarantee reliability and efficiency.
          </p>
        </div>

        <div className="bg-white rounded-[24px] p-4 lg:pt-10 lg:pl-10 lg:pr-0 lg:pb-0 flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center lg:items-start relative h-min w-full mb-8 overflow-hidden transform-none origin-center opacity-100 flex-none">
          {/* left */}
          <div className="z-10 max-w-xl flex flex-col items-center lg:items-start flex-1 gap-[16px]">
            <h2 className="text-2xl font-medium">
              Registered as a Legal Entity in Uzbekistan
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base">
              Officially recognized as a lawful business entity by the Republic
              of Uzbekistan, solidifying our legal and operational presence.
            </p>
          </div>

          <div
            className="self-center lg:self-end border border-[#DEE0E3] transform-none origin-center flex-none h-[350px] lg:h-[542px] overflow-hidden relative w-full lg:w-[579px]"
            style={{
              filter:
                "drop-shadow(rgba(0, 0, 0, 0.02) 0px 2.76726px 2px) drop-shadow(rgba(0, 0, 0, 0.027) 0px 6.6501px 3px) drop-shadow(rgba(0, 0, 0, 0.035) 0px 12.5216px 6px) drop-shadow(rgba(0, 0, 0, 0.043) 0px 22.3363px 10px) drop-shadow(rgba(0, 0, 0, 0.05) 0px 41.7776px 19px) drop-shadow(rgba(0, 0, 0, 0.07) 0px 100px 45px)",
            }}
          >
            <Image
              src={guvohnoma}
              alt="person"
              className="block w-full h-full rounded-[inherit] object-top object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8">
          <div className="bg-white rounded-[24px] p-4 lg:pt-[40px] lg:px-10 pb-6 lg:pb-0 relative h-auto flex gap-10 lg:gap-[24px] flex-col items-center lg:self-stretch lg:flex-1 overflow-hidden transform-none origin-center">
            <div className="flex flex-col gap-[16px] lg:h-min lg:overflow-hidden lg:p-0 lg:relative lg:w-full">
              <h3 className="text-2xl lg:text-[24px] font-medium">Certified by the Cybersecurity</h3>
              <p className="text-sm">
                Our system has undergone rigorous testing and evaluation by the
                Cyber Security Center, earning a trusted certification for its
                security and reliability.
              </p>
            </div>
            <Image
              src={sertifikat}
              alt="Sertifikat"
              className="relative lg:absolute lg:top-50 w-full max-w-[360px] lg:w-110 lg:left-1/2 lg:-translate-x-1/2 h-[350px] lg:h-auto object-cover object-top"
            />
          </div>

          <div className="bg-white rounded-[24px] p-4 lg:pt-10 lg:px-10 pb-0 relative h-auto lg:h-160 flex gap-10 lg:gap-5 flex-col items-center lg:items-start overflow-hidden transform-none origin-center">
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-xl lg:text-[24px] font-medium">Resident of IT Park</h3>
              <p className="w-full lg:w-140">
                Proudly recognized as a resident of IT Park, granting us access to
                a leading environment for innovation and technological
                advancement.
              </p>
            </div>
            <Image
              src={it_sertifikat}
              alt="Sertifikat"
              className="relative lg:absolute lg:top-48 lg:top-40 w-full max-w-full lg:w-150 h-[250px] sm:h-[350px] lg:h-130 object-contain lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
