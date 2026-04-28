export default function Hero() {
  return (
    <section className="w-full py-16  sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="max-w-xl">
          <div className="block">
            <div className="inline-flex mb-12 cursor-pointer items-center gap-3 bg-white rounded-full px-4 py-1 shadow-sm border border-gray-100">
              <span className="text-gray-700 text-sm font-medium whitespace-nowrap">
                Just launched White Hat Security check
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-semibold px-5 py-1 rounded-full whitespace-nowrap">
                Book consultancy
              </button>
            </div>
          </div>
          <h1 className="whitespace-pre-wrap font-medium break-words font-medium not-italic text-[#14151a] text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.01em]">
            Cybersecurity Solutions for Organizations and Enterprises
          </h1>
          <p className="whitespace-pre-wrap break-words text-[#6b6d78] font-medium text-[22px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[-0.01em] mt-6">
            Protect your network with Datagaze’s advanced DLP, SIEM, and
            security technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
