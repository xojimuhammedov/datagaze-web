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
              <Button className="py-5 bg-[#0055FF] hover:bg-[#0055FF]/90 shadow-[0px_4px_10px_0px_#0000000D] rounded-[18px] cursor-pointer text-base">
                Get a demo
              </Button>
              <Button variant="outline" className="py-5 cursor-pointer shadow-[0px_4px_10px_0px_#0000000D] bg-[#FFFFFF33] rounded-[18px] border-none">
                <span className="text-base">Talk with sales</span>
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
