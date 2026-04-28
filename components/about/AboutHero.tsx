import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full py-20  bg-[#F9FAFB]  pt-40">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="flex flex-col items-center  gap-6  border p-8 rounded-3xl bg-gradient-to-r from-white to-[#EBF4FC]">
          <div className="mb-10">
            <Image
              src="/images/datagaze-logo-full-color-rgb.svg"
              alt="logo"
              width={150}
              height={50}
              className="w-[340px]  "
            />
          </div>

          <h1 className=" text-4xl font-medium  text-center mb-10 ">
            Datagaze LLC is the first national company providing cybersecurity
            solutions for medium and large enterprises.{" "}
          </h1>

          <p className="text-center text-muted-foreground text-lg ">
            Its first product, DLP (Data Loss Prevention), helps monitor and
            control access, protecting against internal cyber threats and
            preventing data leaks. Currently, DLP is installed on about 12,000
            endpoints in Uzbekistan, and the company collaborates with more than
            40 government agencies and private companies, ensuring the security
            of their corporate information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
