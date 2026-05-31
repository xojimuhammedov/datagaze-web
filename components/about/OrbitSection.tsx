"use client";

import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";


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
      <div className="bg-white rounded-[24px] p-4 lg:pt-0 lg:px-[120px] lg:pb-[80px] flex flex-col gap-10 items-center relative h-min w-full mb-8 overflow-hidden transform-none origin-center opacity-100 flex-none">

        {/* ── Orbit visual ── */}
        <div className="relative mx-auto w-full h-[557px]">
          {/* Clipped top-half container for the rings (letting top overflow but clipping bottom) */}
          <div className="relative overflow-hidden w-full h-[500px] mt-10">
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
                  className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm w-20 h-20 top-0 left-0 will-change-transform"
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

        {/* ── Metrics Section (from Frame 7.png design) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-[80px] w-full text-center mt-12 pb-4">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <h3 className="text-[54px] font-semibold text-gray-900 leading-none">6+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Over 6 Years of Expertise</h4>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Delivering customized cybersecurity solutions across government and business sectors with decades of experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <h3 className="text-[54px] font-semibold text-gray-900 leading-none">15000+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Devices Secured</h4>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Protecting over 12,000 endpoints with cutting-edge tools designed to prevent data breaches and internal threats.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <h3 className="text-[54px] font-semibold text-gray-900 leading-none">25+</h3>
            <h4 className="text-lg font-medium text-gray-900 mt-4 mb-2">Highly Skilled Specialists</h4>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[280px]">
              Our expert team crafts advanced solutions to ensure comprehensive data security for your organization.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
