import staff_logo from "@/public/staff/staff_logo.svg";
import Image from "next/image";
import staff_img from "@/public/staff/staff.png";

const Staff = () => {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 items-center pt-40 pb-20">
          <div className="border p-4 rounded-2xl shadow-md">
            <Image src={staff_logo} alt="logo" />
          </div>
          <h1 className="text-6xl font-medium mb-4">Datagaze Staff</h1>
          <p className="w-165 text-center text-xl text-muted-foreground">
            Datagaze SIEM (Security Information and Event Management)
            continuously monitors and analyzes security events across your
            network, detecting threats and anomalies in real time.
          </p>
        </div>

        <div className="flex justify-center">
          <Image src={staff_img} alt="Siem" className="w-400" />
        </div>
      </div>
    </section>
  );
};

export default Staff;
