import { GoArrowUpRight } from "react-icons/go";
import { Button } from "../ui/button";
import Image from "next/image";
import img from "@/public/images/organization.avif";

const SimplifiedSecurity = () => {
  return (
    <section className="w-full py-10  bg-[#F9FAFB]  pb-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-10 rounded-2xl flex gap-3 items-center border">
          <div>
            <Image src={img} alt="" className="w-300" />
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl">Simplified Security for Organizations</h1>
            <p className="text-muted-foreground">
              Focus on growth while we protect your data. Our solutions are
              designed to secure your systems with ease and efficiency. Get a
              demo today and see how we make data security simpler.
            </p>
            <div className="flex gap-3">
              <Button className=" py-5  bg-blue-600 hover:bg-blue-700 cursor-pointer text-xs">
                Get a demo
              </Button>
              <Button variant="outline" className="py-5 cursor-pointer">
                <span className="text-xs">Talk with sales</span>
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
