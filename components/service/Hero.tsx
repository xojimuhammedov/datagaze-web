

const Hero = () => {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-30">
      <div className="mx-auto grid w-full max-w-7xl items-center px-6 lg:grid-cols-2 pt-36">
        <div className="max-w-2xl">
          <h1 className="font-medium text-[#14151a] text-[32px] md:text-5xl leading-[40px] md:leading-[56px] tracking-[-0.01em]">
            Complete Security Check: Protect Your System
          </h1>
          <p className="break-words text-[#6b6d78] font-medium text-[22px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[-0.01em] mt-6">
            Our audit not only identifies risks but also reinforces your defenses to keep your data safe from evolving threats.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[561px] rounded-[12px] overflow-hidden p-[1.5px] group">
            {/* Dual Rotating Border Animation */}
            <div className="absolute inset-[-200%] animate-rotate bg-[conic-gradient(from_0deg,transparent_320deg,#2563eb_360deg,transparent_40deg)] opacity-100" />
            <div className="absolute inset-[-200%] animate-rotate-reverse bg-[conic-gradient(from_0deg,transparent_320deg,#2563eb_360deg,transparent_40deg)] opacity-100" />

            <form
              className="relative z-10 w-full p-5 flex flex-col gap-5 rounded-[11px] overflow-hidden"
              style={{
                background: "linear-gradient(rgb(222, 233, 255) 0%, rgb(255, 255, 255) 100%)"
              }}
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-[#14151a] leading-[28px] tracking-[-0.01em]">
                  Experience innovation firsthand.
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Full name</span>
                    <input
                      type="text"
                      placeholder="Akmal Karimov"
                      className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Phone number</span>
                    <input
                      type="tel"
                      placeholder="+998"
                      className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-gray-900">Tell us about the issue</span>
                  <textarea name="message" id="message" placeholder="Message" className="w-full h-[104px] px-3 py-2 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all" ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-[40px] bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-[14px] rounded-[10px] transition-all shadow-md active:scale-[0.98] flex items-center justify-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
