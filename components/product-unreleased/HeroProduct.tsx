import logo from "@/public/dlp/dlp_logo.svg";
import Image from "next/image";
import img from "@/public/product-unreleased/unreleased.svg";

const HeroProduct = () => {
  return (
    <section className="w-full py-10  bg-[#F8F8F8] pt-30 pb-35 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center pb-20">
          <Image src={logo} alt="logo" />
          <h1 className="text-6xl font-medium ">Datagaze DLP</h1>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Datagaze DLP (Data Loss Prevention System) constantly monitors the
            flow of data exchanged on your network.
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={img} alt="dlp" />
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
