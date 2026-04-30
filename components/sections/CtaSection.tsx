"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] w-full h-min p-10 lg:p-0 relative overflow-hidden border border-[#DEE0E3]">
          
          {/* Left Side: Orbiting Visuals */}
          <div className="relative w-full lg:w-1/2 h-[400px] md:h-[500px] flex items-center justify-center lg:block overflow-hidden">
             {/* Background Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white z-10 pointer-events-none" />
            
            {/* Visual System (Anchored to card's bottom-left) */}
            <div className="absolute left-0 bottom-0 w-[800px] h-[800px]">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* SVG Concentric Circles from assets */}
                <img src="/rectangle-11.svg" className="absolute left-0 bottom-0 opacity-40" />
                <img src="/rectangle-12.svg" className="absolute left-0 bottom-0 opacity-60" />
                <img src="/rectangle-13.svg" className="absolute left-0 bottom-0 opacity-80" />
                <img src="/rectangle-14.svg" className="absolute left-0 bottom-0" />

                {/* Orbiting Logo 1 (Matches Rectangle 11 - radius ~388) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[776px] h-[776px]"
                  style={{ left: '-388px', bottom: '-388px' }}
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/icon1.svg" alt="Icon 1" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Logo 2 (Matches Rectangle 12 - radius ~298) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[596px] h-[596px]"
                  style={{ left: '-298px', bottom: '-298px' }}
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/icon5.svg" alt="Icon 5" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Logo 3 (Matches Rectangle 13 - radius ~213) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[426px] h-[426px]"
                  style={{ left: '-213px', bottom: '-213px' }}
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/2 right-0 translate-x-1/2 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/logo1.svg" alt="Logo 1" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>

                {/* Center Stationary Logo (Anchored to Rectangle 14 center) */}
                <div 
                  className="absolute z-20 w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-white rounded-full shadow-[0px_8px_40px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 md:p-8 border border-gray-100"
                  style={{ left: '-90px', bottom: '-90px' }}
                >
                  <img src="/logos/icon4.svg" alt="Datagaze" className="w-full h-full object-contain" />
                </div>

                {/* Orbiting Logo 1 (icon1.svg) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[500px] h-[500px]"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/icon1.svg" alt="Icon 1" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Logo 2 (icon5.svg) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[350px] h-[350px]"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/icon5.svg" alt="Icon 5" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Logo 3 (logo1.svg) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[220px] h-[220px]"
                >
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/2 right-0 translate-x-1/2 w-[85px] h-[85px] bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-50"
                  >
                    <img src="/logos/logo1.svg" alt="Logo 1" className="w-full h-full object-contain" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-8 lg:p-10 lg:pr-20 lg:py-20 z-20">
            <h2 className="font-semibold text-3xl md:text-5xl text-[#14151a] leading-tight max-w-xl tracking-tight">
              Simplified Security for Organizations
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#6b6d78] leading-relaxed max-w-[540px]">
              Focus on growth while we protect your data. Our solutions are
              designed to secure your systems with ease and efficiency. Get a
              demo today and see how we make data security simpler.
            </p>
            <div className="flex gap-3">
              <Button className="bg-[#2563EB] hover:bg-[#2563EB]/90 h-[44px] md:h-[48px] px-6 md:px-8 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[13px] md:text-[14px] font-semibold text-white cursor-pointer">
                Get a demo
              </Button>
              <Button variant="outline" className="bg-white border border-[#DEE0E3] h-[44px] md:h-[48px] px-6 md:px-8 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] text-[13px] md:text-[14px] font-semibold text-black cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                Talk with sales
                <GoArrowUpRight className="text-lg text-gray-500" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
