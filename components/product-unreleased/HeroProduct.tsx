import logo from "@/public/dlp/dlp_logo.svg";
import Image from "next/image";
import img from "@/public/product-unreleased/unreleased.svg";

const HeroProduct = () => {
  return (
    <section className="w-full py-10 pt-20 lg:py-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 items-center pb-20">
          <Image src={logo} alt="logo" />
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">Datagaze DLP</h1>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
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
