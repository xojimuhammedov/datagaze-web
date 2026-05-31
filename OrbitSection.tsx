"use client";

import { useRef, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

// ─── SVG icons (inline, original paths from uploaded files) ─────────────────

const LogoIcon = () => (
  <svg width="36" height="48" viewBox="0 0 58 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M42.3015 44.6079L36.7424 47.4773L21.1182 55.549L15.5591 58.4184L10 61.2878L15.5591 64.1573L21.1182 61.2878L36.7424 53.2202L42.3015 50.3507L47.8606 47.4813L42.3015 44.6079Z"
      fill="#1153E3"
    />
    <path
      d="M36.7431 28.7031L42.3022 26.5491L36.7431 23.6797L21.119 15.6121V20.6355L36.7431 28.7031Z"
      fill="#1153E3"
    />
    <path
      d="M42.3012 20.8105L36.7422 17.9371L21.118 9.86943L15.5587 7V53.3951L21.1179 50.5257V15.6121L36.7421 23.6798L42.3011 26.5493V44.6082L47.8603 47.4814V23.6798L42.3012 20.8105Z"
      fill="#2563EB"
    />
    <path
      d="M36.7425 28.7032V42.4541L21.1183 50.5257L15.5593 53.3951V7L10 9.86943V61.288L15.5592 58.4185L21.1182 55.5491L36.7424 47.4775L42.3016 44.608V26.5491L36.7425 28.7032Z"
      fill="#7BA4FF"
    />
  </svg>
);

// Orbit icons — using the Framer CDN images from uploaded SVGs
// (replace src with your own hosted images in production)
const ORBIT_ICONS: { src: string; w: number; h: number }[] = [
  {
    src: "https://framerusercontent.com/images/bD60Tvl8MxFKFMnpt37ZGUXHKs.png",
    w: 28,
    h: 36,
  },
  {
    src: "https://framerusercontent.com/images/3O9J3T4xnaakdI2I8WSXgHX878.png",
    w: 36,
    h: 36,
  },
  {
    src: "https://framerusercontent.com/images/fgJJg8euwr9lpdPC7RnSXf9Rck.png",
    w: 36,
    h: 28,
  },
  {
    src: "https://framerusercontent.com/images/bD60Tvl8MxFKFMnpt37ZGUXHKs.png",
    w: 28,
    h: 36,
  },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface Metric {
  value: string;
  title: string;
  description: string;
}

const METRICS: Metric[] = [
  {
    value: "6+",
    title: "Yillik tajriba",
    description:
      "Davlat va biznes sektorlarida moslashtirilgan kiberxavfsizlik yechimlari.",
  },
  {
    value: "12,000+",
    title: "Himoyalangan qurilmalar",
    description:
      "Ma'lumot sizib chiqishi va ichki tahdidlarning oldini oluvchi ilg'or vositalar.",
  },
  {
    value: "20+",
    title: "Malakali mutaxassislar",
    description:
      "Keng qamrovli ma'lumot xavfsizligini ta'minlovchi ekspert jamoa.",
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const STAGE_SIZE = 340; // full circle diameter (px)
const CLIP_HEIGHT = STAGE_SIZE / 2; // only top half visible
const CENTER = STAGE_SIZE / 2; // 170
const OUTER_RADIUS = 155; // orbit radius
const PILL_SIZE = 52; // icon badge diameter
const SPEED = 0.25; // degrees per frame

// ─── OrbitSection ─────────────────────────────────────────────────────────────

export default function OrbitSection() {
  const angle = useRef(-90); // start at top (−90°)
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useAnimationFrame(() => {
    angle.current += SPEED;

    pillRefs.current.forEach((el, i) => {
      if (!el) return;
      const deg = angle.current + i * 90; // 4 icons, 90° apart
      const rad = (deg * Math.PI) / 180;
      const x = CENTER + OUTER_RADIUS * Math.cos(rad) - PILL_SIZE / 2;
      const y = CENTER + OUTER_RADIUS * Math.sin(rad) - PILL_SIZE / 2;
      el.style.transform = `translate(${x}px, ${y}px) rotate(${-deg}deg)`;
    });
  });

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-8">

        {/* ── Orbit visual (clipped to top half) ── */}
        <div
          className="mx-auto overflow-hidden"
          style={{ width: STAGE_SIZE, height: CLIP_HEIGHT }}
        >
          <div
            className="relative"
            style={{ width: STAGE_SIZE, height: STAGE_SIZE }}
          >
            {/* Outer dashed ring */}
            <div
              className="absolute border border-dashed border-blue-200 rounded-full"
              style={{
                width: OUTER_RADIUS * 2 + PILL_SIZE,
                height: OUTER_RADIUS * 2 + PILL_SIZE,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Inner dashed ring */}
            <div
              className="absolute border border-dashed border-blue-100 rounded-full"
              style={{
                width: 200,
                height: 200,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Orbiting icon badges */}
            {ORBIT_ICONS.map((icon, i) => (
              <div
                key={i}
                ref={(el) => { pillRefs.current[i] = el; }}
                className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm"
                style={{
                  width: PILL_SIZE,
                  height: PILL_SIZE,
                  top: 0,
                  left: 0,
                  willChange: "transform",
                }}
              >
                <img
                  src={icon.src}
                  alt=""
                  width={icon.w}
                  height={icon.h}
                  className="object-contain"
                />
              </div>
            ))}

            {/* Center logo badge */}
            <div
              className="absolute flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-md"
              style={{
                width: 72,
                height: 72,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <LogoIcon />
            </div>
          </div>
        </div>

        {/* ── Metric cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          {METRICS.map((m) => (
            <div
              key={m.title}
              className="bg-gray-50 rounded-xl p-4 text-center"
            >
              <p className="text-3xl font-medium text-gray-900 mb-1">
                {m.value}
              </p>
              <p className="text-sm font-medium text-gray-800 mb-2">
                {m.title}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
