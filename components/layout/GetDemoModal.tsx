'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';

const GetDemoModal = () => {
  const { isDemoModalOpen, closeDemoModal } = useModal();

  return (
    <AnimatePresence>
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDemoModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[12px] p-[20px] shadow-2xl"
            style={{
              background: 'linear-gradient(rgb(222, 233, 255) 0%, rgb(255, 255, 255) 100%)',
              display: 'flex',
              flexFlow: 'column',
              gap: '20px',
              alignItems: 'flex-start',
              height: 'min-content',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeDemoModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <h2 
              className="text-start pr-8"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: '24px',
                color: '#14151a',
              }}
            >
              Experience innovation firsthand. Schedule your demo today.
            </h2>

            <form
              className="w-full flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Demo scheduled! We will contact you soon.');
                closeDemoModal();
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Full name</span>
                    <input 
                      type="text" 
                      placeholder="Akmal Karimov"
                      required
                      className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Phone number</span>
                    <input 
                      type="tel" 
                      placeholder="+998"
                      required
                      className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Select product type</span>
                    <select className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all cursor-pointer">
                      <option value="DLP">Datagaze DLP</option>
                      <option value="SIEM">Datagaze SIEM</option>
                      <option value="Staff">Datagaze Staff</option>
                      <option value="WAF">Datagaze WAF</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">Company size</span>
                    <select className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 focus:outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all cursor-pointer">
                      <option value="50-100">50-100</option>
                      <option value="100-200">100-200</option>
                      <option value="200-500">200-500</option>
                      <option value="500+">More than 500 Employees</option>
                    </select>
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full h-10 cursor-pointer bg-[#2563eb] hover:bg-blue-700 text-white font-medium text-sm rounded-[10px] transition-all shadow-md active:scale-[0.98] flex items-center justify-center mt-2"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GetDemoModal;
