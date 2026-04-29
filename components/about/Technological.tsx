import Image from "next/image";
import icon1 from "@/public/logos/icon1.svg";
import icon2 from "@/public/logos/icon2.svg";
import icon3 from "@/public/logos/icon3.svg";
import icon4 from "@/public/logos/icon4.svg";
import icon5 from "@/public/logos/icon5.svg";
import icon6 from "@/public/logos/icon6.svg";
import person from "@/public/texnological/photo.avif";
import d1 from "@/public/texnological/d1.svg";

const Technological = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <section className="w-full py-20 pb-20 pt-40">
      <div className="mx-auto max-w-6xl px-6 ">
        <div className="grid grid-cols-2 items-center ">
          <div className="grid grid-cols-3 gap-4 w-fit place-items-center">
            {icons?.map((icon, i) => (
              <div
                key={i}
                className={`flex items-center justify-center rounded-2xl shadow-[0px_8px_24px_0px_#0000000A] bg-white p-6 ${i % 2 === 0 ? "w-[104px] h-[104px]" : "w-[120px] h-[120px]"
                  }`}
              >
                <Image src={icon} alt={`partner logo ${i + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-[36px] font-medium leading-none pb-4">
              Ensuring Data Security. Driving Technological Progress.
            </h2>
            <p className="text-lg font-normal text-muted-foreground">
              At Datagaze LLC, our primary goal is to provide reliable and
              modern cybersecurity solutions by ensuring data security. By
              applying innovations, we help our clients solve complex
              cybersecurity challenges and stay protected.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-[20px] p-5 flex items-center gap-15 mt-30 border">
          <div>
            <Image
              src={person}
              alt="person"
              width={850}
              height={320}
              className=" object-cover rounded-2xl border shrink-0"
            />
          </div>

          <div className="flex flex-col gap-5">
            <Image src={d1} alt="quote" width={90} height={90} />
            <p className="text-xl font-normal">
              Our main goal is to be a reliable and long-term partner in the
              field of information security and cybersecurity, provide
              convenience to customers and constantly develop products and
              services. Give your security in good hands.
            </p>

            <span className="text-xl text-muted-foreground">
              Azamjon Nabijonov <br /> CTO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technological;
