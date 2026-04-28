import React from "react";

const Hero = () => {
  return (
    <section className="w-full py-16  sm:py-20 lg:py-30">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        
        <div className="">
          <h1 className="whitespace-pre-wrap font-medium not-italic text-[#14151a] text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em]">
            Complete Security Check: Protect Your System
          </h1>
          <p className="whitespace-pre-wrap break-words text-[#6b6d78] font-medium text-[22px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[-0.01em] mt-6">
            Our audit not only identifies risks but also reinforces your
            defenses to keep your data safe from evolving threats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
