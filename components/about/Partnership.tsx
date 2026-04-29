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
            <Button className="py-5 bg-[#0055FF] hover:bg-[#0055FF]/90 shadow-[0px_4px_10px_0px_#0000000D] rounded-[18px] cursor-pointer text-base">
              Get a demo
            </Button>
            <Button variant="outline" className="py-5 cursor-pointer shadow-[0px_4px_10px_0px_#0000000D] bg-[#FFFFFF33] rounded-[18px] border-none">
              <span className="text-base">Talk with sales</span>
              <GoArrowUpRight />
            </Button>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-10 flex gap-10 items-center relative h-[580px] mb-8 overflow-hidden">
          {/* left */}
          <div className="z-10 max-w-xl">
            <h2 className="text-2xl pb-5 font-medium">
              Registered as a Legal Entity in Uzbekistan
            </h2>
            <p className="text-muted-foreground">
              Officially recognized as a lawful business entity by the Republic
              of Uzbekistan, solidifying our legal and operational presence.
            </p>
          </div>

          {/* right */}

          <div className="self-end">
            <Image
              src={guvohnoma}
              alt="person"
              className="absolute w-150 object-cover top-12 right-0"
            />
          </div>
        </div>

        <div className="grid  grid-cols-[1.5fr_2fr] gap-8 ">
          <div className="bg-white p-10 rounded-2xl relative h-160 flex gap-5 flex-col overflow-hidden">
            <h1 className="text-[24px] font-medium">Certified by the Cybersecurity</h1>
            <p className="text-md text-muted-foreground ">
              Our system has undergone rigorous testing and evaluation by the
              Cyber Security Center, earning a trusted certification for its
              security and reliability.
            </p>
            <Image
              src={sertifikat}
              alt="Sertifikat"
              className="absolute top-55 w-110 shadow-2xl left-1/2 -translate-x-1/2"
            />
          </div>

          <div className="bg-white p-10 rounded-2xl relative h-160 flex gap-5 flex-col overflow-hidden">
            <h1 className="text-[24px] font-medium">Resident of IT Park</h1>
            <i className="text-md w-140 text-muted-foreground ">
              Proudly recognized as a resident of IT Park, granting us access to
              a leading environment for innovation and technological
              advancement.
            </i>
            <Image
              src={it_sertifikat}
              alt="Sertifikat"
              className="absolute top-58 w-150 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
