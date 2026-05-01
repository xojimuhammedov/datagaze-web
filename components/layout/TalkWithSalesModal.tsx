'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { X } from 'lucide-react';

const TalkWithSalesModal = () => {
  const { isSalesModalOpen, closeSalesModal } = useModal();

  return (
    <AnimatePresence>
      {isSalesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSalesModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-[324px] overflow-hidden rounded-[12px] p-[20px] shadow-2xl"
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
              onClick={closeSalesModal}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={20} />
            </button>

            <h2
              className="text-start"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: '20px',
                color: '#14151a',
              }}
            >
              Discover your perfect solution. Connect with our sales team today.
            </h2>

            <form
              className="w-full flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Form submitted! Our sales team will contact you soon.');
                closeSalesModal();
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-900">Full name</span>
                <input
                  type="text"
                  placeholder="Akmal Karimov"
                  className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-900">Phone number</span>
                <input
                  type="tel"
                  placeholder="+998"
                  className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                />
              </label>

              <button
                type="submit"
                className="w-full h-10 cursor-pointer bg-[#2563eb] hover:bg-blue-700 text-white font-semibold text-sm rounded-[10px] transition-all shadow-md active:scale-[0.98] flex items-center justify-center"
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

export default TalkWithSalesModal;
