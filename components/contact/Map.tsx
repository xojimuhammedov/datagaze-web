import React from "react";

const Map = () => {
  return (
    <section className="w-full py-10  bg-[#F9FAFB]  ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white border p-6 w-full flex justify-center items-center rounded-[20px] shadow-[0px_4px_15px_0px_#0000000D]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5994.267313857778!2d69.2832757898212!3d41.305955896040224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1776406113610!5m2!1sru!2s"
            className="w-full h-[672px] border border-[#E3E3E3] rounded-[17px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
