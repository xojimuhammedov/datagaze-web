import Image from "next/image";
import logo from "@/public/siem/siem_logo.svg";
import siem_img from "@/public/siem/img.svg";

const Siem = () => {
  return (
    <section className="w-full py-10  bg-[#F9FAFB] pt-30  ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center pb-18">
          <Image src={logo} alt="logo" />
          <h1 className="text-6xl font-medium ">Datagaze SIEM</h1>
          <p className="w-165 text-center text-[20px] text-muted-foreground">
            Datagaze SIEM (Security Information and Event Management)
            continuously monitors and analyzes security events across your
            network, detecting threats and anomalies in real time.
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={siem_img} alt="Siem" className="w-400"/>
        </div>
      </div>
    </section>
  );
};

export default Siem;
