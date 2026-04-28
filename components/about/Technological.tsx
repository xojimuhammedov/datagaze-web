import Image from "next/image";
import logo from "@/public/texnological/logooo.png";
import person from "@/public/texnological/photo.avif";
import { BiSolidQuoteLeft } from "react-icons/bi";

const Technological = () => {
  return (
    <section className="w-full py-20  bg-[#F9FAFB] pb-20 pt-40">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="grid grid-cols-2 items-center gap-40">
          <div className="grid grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="basis-1/3 flex items-center justify-center border p-4 rounded-xl shadow-sm bg-white"
              >
                <Image src={logo} alt="partner logo" className="" />
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-4xl  pb-4">
              Ensuring Data Security. Driving Technological Progress.
            </h1>
            <p className="text-xl text-muted-foreground">
              At Datagaze LLC, our primary goal is to provide reliable and
              modern cybersecurity solutions by ensuring data security. By
              applying innovations, we help our clients solve complex
              cybersecurity challenges and stay protected.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-7 flex gap-15 mt-30 border">
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
            <BiSolidQuoteLeft size={90} className="text-muted-foreground/20" />
            <p className="text-xl">
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
