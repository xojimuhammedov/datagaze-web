"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";
import { useTranslation } from "react-i18next";


const ORBIT_ICONS: { src: string; w: number; h: number }[] = [
  {
    src: "/logos/sdasdsd_1.svg",
    w: 63,
    h: 60,
  },
  {
    src: "/logos/99004_1.svg",
    w: 35,
    h: 55,
  },
  {
    src: "/logos/partner_sdsd2x.svg",
    w: 63,
    h: 60,
  },
  {
    src: "/logos/24003_1.svg",
    w: 63,
    h: 60,
  },
];

const STAGE_SIZE = 820;
const CENTER = STAGE_SIZE / 2;
const OUTER_RADIUS = 404;
const INNER_RADIUS = 254;
const PILL_SIZE = 80;
const SPEED = 0.5;

export default function OrbitSection() {
  const { t } = useTranslation();
  const angle = useRef(-90);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useAnimationFrame(() => {
    angle.current += SPEED;

    pillRefs.current.forEach((el, i) => {
      if (!el) return;
      // 2 ta tashqi (index 0, 2), 2 ta ichki (index 1, 3) dashed da aylanishi uchun
      const currentRadius = i % 2 === 0 ? OUTER_RADIUS : INNER_RADIUS;
      const deg = angle.current + i * 90; // 4 icons, 90° apart
      const rad = (deg * Math.PI) / 180;
      const x = CENTER + currentRadius * Math.cos(rad) - PILL_SIZE / 2;
      const y = CENTER + currentRadius * Math.sin(rad) - PILL_SIZE / 2;
      el.style.transform = `translate(${x}px, ${y}px) rotate(${-deg}deg)`;
    });
  });

  return (
    <section className="w-full py-10 px-4">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-12">
        <div className="pb-8 lg:p-30 flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl lg:text-[50px] font-medium text-center text-gray-900 max-w-3xl">
            {t("orbit_section.title")}
          </h2>

          <p className="text-lg lg:text-xl font-normal text-center text-[#5E5E5E] max-w-2xl">
            {t("orbit_section.description")}
          </p>
        </div>
      </div>
      <div className="mt-20 md:mt-0 bg-white max-w-6xl mx-auto p-4 rounded-[24px] flex flex-col gap-10 items-center relative h-min w-full mb-8 overflow-hidden flex-none">

        {/* ── Orbit visual ── */}
        {/* Desktop Orbit Animation */}
        <div className="hidden md:block relative mx-auto w-full h-[557px]">
          {/* Clipped top-half container for the rings (letting top overflow but clipping bottom) */}
          <div className="relative overflow-hidden w-full h-[460px] mt-10">
            <div className="absolute w-[820px] h-[820px] top-[90px] left-1/2 -translate-x-1/2">
              {/* Outer dashed ring */}
              <div className="absolute rounded-full w-[809px] h-[808px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-[#7cc4ff]" />

              {/* Inner dashed ring */}
              <div className="absolute rounded-full w-[501px] h-[509px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-[#84caff]" />

              {/* Orbiting icon badges */}
              {ORBIT_ICONS.map((icon, i) => (
                <div
                  key={i}
                  ref={(el) => { pillRefs.current[i] = el; }}
                  className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm w-25 h-25 top-0 left-0 will-change-transform"
                >
                  <img
                    src={icon.src}
                    alt=""
                    width={icon.w}
                    height={icon.h}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Centered dashed border line under the logo */}
          <div className="absolute w-[809px] left-1/2 -translate-x-1/2 bottom-[57px] border-b border-dashed border-[#7cc4ff] z-0" />

          <div className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-md z-10 w-[114px] h-[114px] rounded-[110px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] bottom-0 left-1/2 -translate-x-1/2">
            <img
              src="/logos/icon4.svg"
              alt="Logo"
              width={37}
              height={57}
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile Background Image */}
        <div className="block md:hidden w-full">
          <img
            src="/mobile-bg.jpg"
            alt="Mobile Background"
            className="w-full h-auto"
          />
        </div>

        {/* ── Metrics Section (from Frame 7.png design) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center mt-4 lg:mt-12 pb-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-medium text-gray-900 leading-none">6+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">{t("orbit_section.stat1_title")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("orbit_section.stat1_desc")}
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-medium text-gray-900 leading-none">15000+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">{t("orbit_section.stat2_title")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("orbit_section.stat2_desc")}
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl font-medium text-gray-900 leading-none">25+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">{t("orbit_section.stat3_title")}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              {t("orbit_section.stat3_desc")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
