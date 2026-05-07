import Image from "next/image";
import waff_logo from "@/public/waff/waff_logo.svg";
import img from "@/public/waff/img_waff.svg";

const WaffHero = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-8 items-center pt-20 lg:pt-40 pb-20">
          <Image src={waff_logo} alt="logo" />
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">Datagaze Waff</h1>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
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
