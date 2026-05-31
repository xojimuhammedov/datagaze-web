"use client";

import React from "react";
import { sendTelegramMessage } from "@/utils/telegram";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const message = formData.get("message") as string;

    const text = `<b>🆕 Yangi Ariza (Xizmatlar sahifasi)</b>\n\n<b>👤 F.I.Sh:</b> ${fullName}\n<b>📞 Telefon:</b> ${phoneNumber}\n<b>📝 Muammo/Xabar:</b> ${message}`;

    const success = await sendTelegramMessage(text);
    if (success) {
      alert(t("modals.success_alert"));
      form.reset();
    } else {
      alert(t("modals.error_alert"));
    }
  };

  return (
    <section className="w-full py-10 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center px-4 lg:px-6 gap-16 lg:grid-cols-2 pt-36">
        <div className="max-w-2xl flex flex-col gap-8">
          <h1 className="font-medium text-[#14151a] text-4xl md:text-5xl leading-[40px] md:leading-[56px]">
            {t("service_page.hero_title")}
          </h1>
          <p className="text-[#6b6d78] font-medium text-xl leading-[24px]">
            {t("service_page.hero_desc")}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[561px] rounded-[12px] overflow-hidden p-[1.5px] group">
            {/* Dual Rotating Border Animation */}
            <div className="absolute inset-[-200%] animate-rotate bg-[conic-gradient(from_0deg,transparent_320deg,#2563eb_360deg,transparent_40deg)] opacity-100" />
            <div className="absolute inset-[-200%] animate-rotate-reverse bg-[conic-gradient(from_0deg,transparent_320deg,#2563eb_360deg,transparent_40deg)] opacity-100" />

            <form
              onSubmit={handleSubmit}
              className="relative z-10 w-full p-5 flex flex-col gap-5 rounded-[11px] overflow-hidden"
              style={{
                background: "linear-gradient(rgb(222, 233, 255) 0%, rgb(255, 255, 255) 100%)"
              }}
            >
              <div className="flex flex-col">
                <h3 className="text-xl font-medium text-[#14151a] leading-[28px] tracking-[-0.01em]">
                  {t("service_page.form_title")}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">{t("hero.full_name")}</span>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Akmal Karimov"
                      required
                      className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-gray-900">{t("hero.phone_number")}</span>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="+998"
                      required
                      className="w-full h-10 px-3 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium text-gray-900">{t("service_page.issue_label")}</span>
                  <textarea name="message" id="message" placeholder={t("service_page.message_placeholder")} required className="w-full h-[104px] px-3 py-2 bg-white border border-[#DEE0E3] rounded-[10px] text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-all" ></textarea>
                </label>
              </div>

              <button
                type="submit"
                className="w-full h-10 bg-[#2563eb] hover:bg-blue-700 text-white font-medium text-xs rounded-[10px] transition-all shadow-md active:scale-[0.98] flex items-center justify-center"
              >
                {t("hero.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
