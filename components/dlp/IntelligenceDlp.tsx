import img2 from "@/public/dlp/img2.svg";
import Image from "next/image";


const IntelligenceDlp = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white p-6 border rounded-2xl flex flex-col gap-10 items-center">
          <h2 className="text-5xl font-medium w-150 text-center">
            Automated tasks through artificial intelligence
          </h2>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Datagaze DLP (Data Loss Prevention System) constantly monitors the
            flow of data exchanged on your network.
          </p>

          <Image src={img2} alt="photo" className="w-350"/>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceDlp;
