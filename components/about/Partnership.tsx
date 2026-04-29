import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import guvohnoma from "@/public/texnological/guvohnoma.jpg";
import Image from "next/image";
import sertifikat from "@/public/texnological/sertifikat.jpg";
import it_sertifikat from "@/public/texnological/it-park.jpg";

const Partnership = () => {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-30 flex flex-col items-center text-center gap-6">
          <h2 className="text-[50px] font-medium leading-none text-center text-gray-900 max-w-3xl">
            In Partnership with Leading Organizations
          </h2>

          <p className="text-xl font-normal text-center text-[#5E5E5E] max-w-2xl">
            We collaborate with numerous large organizations to help them secure
            their data. Our solutions guarantee reliability and efficiency.
          </p>

          <div className="flex pt-4 gap-3">
            <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-[40px] w-[83px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] opacity-100 text-[12px] leading-[16px] font-semibold text-white cursor-pointer">
              Get a demo
            </Button>
            <Button className="bg-white border border-[#DEE0E3] h-[40px] w-[123px] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[12px] leading-[16px] font-semibold text-black cursor-pointer flex items-center justify-center gap-1 relative overflow-hidden">
              Talk with sales
              <GoArrowUpRight />
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-[24px] pt-[40px] pl-[40px] pr-0 pb-0 flex flex-row gap-[80px] items-center relative h-min w-full mb-8 overflow-hidden transform-none origin-center opacity-100 flex-none">
          {/* left */}
          <div className="z-10 max-w-xl flex flex-col items-start flex-1 gap-[16px]">
            <h2 className="text-2xl font-medium">
              Registered as a Legal Entity in Uzbekistan
            </h2>
            <p className="text-muted-foreground">
              Officially recognized as a lawful business entity by the Republic
              of Uzbekistan, solidifying our legal and operational presence.
            </p>
          </div>

          {/* right */}

          <div
            className="self-end border border-[#DEE0E3] transform-none origin-center flex-none h-[542px] overflow-hidden relative w-[579px]"
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

        <div className="grid grid-cols-[1.5fr_2fr] gap-8">
          <div className="bg-white rounded-[24px] pt-[40px] px-[40px] pb-0 relative h-auto flex gap-[24px] flex-col items-center self-stretch flex-1 overflow-hidden transform-none origin-center">
            <div className="flex flex-col items-start flex-none gap-[16px] h-min overflow-hidden p-0 relative w-full">
              <h3 className="text-[24px] font-medium">Certified by the Cybersecurity</h3>
              <p className="text-md text-muted-foreground ">
                Our system has undergone rigorous testing and evaluation by the
                Cyber Security Center, earning a trusted certification for its
                security and reliability.
              </p>
            </div>
            <Image
              src={sertifikat}
              alt="Sertifikat"
              className="absolute top-50 w-110 shadow-2xl left-1/2 -translate-x-1/2"
            />
          </div>

          <div className="bg-white rounded-[24px] pt-[40px] px-[40px] pb-0 relative h-160 flex gap-5 flex-col overflow-hidden transform-none origin-center">
            <h3 className="text-[24px] font-medium">Resident of IT Park</h3>
            <i className="text-md w-140 text-muted-foreground ">
              Proudly recognized as a resident of IT Park, granting us access to
              a leading environment for innovation and technological
              advancement.
            </i>
            <Image
              src={it_sertifikat}
              alt="Sertifikat"
              className="absolute top-40 w-150 h-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
