import windows from "@/public/dlp/icons/windows.svg";
import server1 from "@/public/dlp/icons/server1.svg";
import server2 from "@/public/dlp/icons/server2.svg";
import Image from "next/image";
const Working = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-8 flex flex-col gap-10 items-center pb-20">
          <h2 className="text-5xl font-medium w-150 text-center ">
            Working environment of Datagaze DLP
          </h2>
          <p className="w-160 text-center text-xl text-muted-foreground">
            No matter what your team is working on, our DLP system keeps every
            file, message, and document secure — everywhere your data goes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="border rounded-2xl bg-white p-10 flex flex-col gap-10">
            <div className="border w-15 h-15 flex items-center justify-center rounded-full">
              <Image src={windows} alt="windows" className="w-4 h-4" />
            </div>
            <div>
              <h3 className="pb-4 text-2xl font-semibold">Client Side</h3>
              <p className="text-muted-foreground">
                Windows XP/7/8/10/11/Server (x86/x64)
              </p>
            </div>
          </div>

          <div className="border rounded-2xl bg-white p-10 flex flex-col gap-10">
            <div className="flex gap-4">
              <div className="border w-15 h-15 flex items-center justify-center rounded-full">
                <Image src={server1} alt="windows" className="w-4 h-4" />
              </div>
              <div className="border w-15 h-15 flex items-center justify-center rounded-full">
                <Image src={server2} alt="windows" className="w-4 h-4" />
              </div>
            </div>
            <div>
              <h3 className="pb-4 text-2xl font-semibold">Server Side</h3>
              <p className="text-muted-foreground">
                Ubuntu Server 24.04 and CentOS 7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Working;
