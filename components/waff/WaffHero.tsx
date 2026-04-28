import Image from "next/image";
import waff_logo from "@/public/waff/waff_logo.svg";
import img from "@/public/waff/img_waff.svg";

const WaffHero = () => {
  return (
    <section className="w-full py-10  bg-[#F9FAFB] pt-30  ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center pb-20">
          <Image src={waff_logo} alt="logo" />
          <h1 className="text-6xl font-medium ">Datagaze Waff</h1>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Datagaze DLP (Data Loss Prevention System) constantly monitors the
            flow of data exchanged on your network.
          </p>
        </div>

        <div>
          <Image src={img} alt="dlp" />
        </div>
      </div>
    </section>
  );
};

export default WaffHero;
