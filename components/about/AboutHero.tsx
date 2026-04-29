import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full bg-[#F9FAFB] bg-[url('/images/rectangle23.svg')] bg-top bg-no-repeat bg-cover pt-32 pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 border p-8 rounded-[20px] bg-[linear-gradient(128.4deg,#FFFFFF_13.5%,#EBF7FF_66.51%)]">
          <div className="mb-10">
            <Image
              src="/images/datagaze-logo-full-color-rgb.svg"
              alt="logo"
              width={150}
              height={50}
              className="w-[340px]"
            />
          </div>

          <h2 className="text-4xl font-medium text-center mb-8">
            Datagaze LLC is the first national company providing cybersecurity
            solutions for medium and large enterprises.{" "}
          </h2>

          <p className="text-center text-muted-foreground text-base text-[#5E5E5E]">
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
