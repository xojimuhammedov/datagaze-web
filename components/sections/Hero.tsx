import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-16  sm:py-20 lg:py-40">
      <div className="mx-auto grid w-full max-w-7xl items-center px-6 lg:grid-cols-2">
        <div className="max-w-xl">
          <Link href={'/service'}>
            <div className="block">
              <div
                className="relative inline-flex mb-12 cursor-pointer items-center rounded-[277px] p-[1px] overflow-hidden group w-min h-min"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.075) 0px 0.706592px 0.706592px -0.625px, rgba(0, 0, 0, 0.07) 0px 1.80656px 1.80656px -1.25px, rgba(0, 0, 0, 0.07) 0px 3.62176px 3.62176px -1.875px, rgba(0, 0, 0, 0.063) 0px 6.8656px 6.8656px -2.5px, rgba(0, 0, 0, 0.05) 0px 13.6468px 13.6468px -3.125px, rgba(0, 0, 0, 0.024) 0px 30px 30px -3.75px"
                }}
              >
                {/* Border Shine Layer */}
                <div className="absolute inset-0 bg-gray-100" />
                <div className="absolute inset-0 animate-mask-shine bg-blue-600" />

                {/* Fill / Background */}
                <div className="absolute inset-[1px] bg-white rounded-[277px] z-0" />

                {/* Content Shine Layer */}
                <div className="absolute inset-0 animate-mask-shine bg-blue-400/10 pointer-events-none z-20" />

                {/* Content */}
                <div className="relative flex items-center gap-[10px] pl-[20px] pr-[6px] py-1 z-10 no-underline">
                  <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                    Just launched White Hat Security check
                  </span>
                  <button className="bg-[#2563eb] hover:bg-blue-700 cursor-pointer transition-colors text-white text-sm font-semibold px-4 py-1 rounded-[328px] whitespace-nowrap flex items-center justify-center">
                    Book consultancy
                  </button>
                </div>
              </div>
            </div>
          </Link>
          <h1 className="whitespace-pre-wrap font-medium break-words font-medium not-italic text-[#14151a] text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em]">
            Cybersecurity Solutions for Organizations and Enterprises
          </h1>
          <p className="whitespace-pre-wrap break-words text-[#6b6d78] font-medium text-[22px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[-0.01em] mt-6">
            Protect your network with Datagaze’s advanced DLP, SIEM, and
            security technologies.
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
                  Experience innovation firsthand. Schedule your demo today.
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Full name</span>
                    <input 
                      type="text" 
                      placeholder="Akmal Karimov"
                      className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Phone number</span>
                    <input 
                      type="tel" 
                      placeholder="+998"
                      className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Select product type</span>
                    <select className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all cursor-pointer">
                      <option value="DLP">Datagaze DLP</option>
                      <option value="SIEM">Datagaze SIEM</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-gray-900">Company size</span>
                    <select className="w-full h-[44px] px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all cursor-pointer">
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200 - 500">More than 500 Employees</option>
                    </select>
                  </label>
                </div>
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
}
