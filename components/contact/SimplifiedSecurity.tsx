import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import Image from "next/image";
import img from "@/public/images/frame9.svg";

const SimplifiedSecurity = () => {
  return (
    <section className="w-full py-10  bg-[#F9FAFB]  pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-8 rounded-[30px] flex gap-8 items-center border shadow-[0px_4px_15px_0px_#0000000D]">
          <div>
            <Image src={img} alt="" className="w-300" />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[40px] font-medium leading-none">Simplified Security for Organizations</h2>
            <p className="text-[18px] font-normal text-muted-foreground">
              Focus on growth while we protect your data. Our solutions are
              designed to secure your systems with ease and efficiency. Get a
              demo today and see how we make data security simpler.
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

export default SimplifiedSecurity;
