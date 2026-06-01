"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Comprehensive = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      id: "detection",
      icon: "/services/detection.svg",
    },
    {
      id: "audit",
      icon: "/services/security_audit.svg",
    },
    {
      id: "data",
      icon: "/services/data.svg",
    },
    {
      id: "compliance",
      icon: "/services/security_compliance.svg",
    },
    {
      id: "implementation",
      icon: "/services/implementation.svg",
    },
    {
      id: "identity",
      icon: "/services/identity.svg",
    },
    {
      id: "training",
      icon: "/services/training.svg",
    },
    {
      id: "incident",
      icon: "/services/incident.svg",
    },
    {
      id: "software",
      icon: "/services/software.svg",
    },
  ];

  return (
    <section className="w-full py-16 lg:py-30">
      <div className="mx-auto  w-full max-w-7xl px-6">
        <div className="flex flex-col gap-2 items-center pb-15">
          <h2 className="text-center text-3xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900 pb-6">
            {t("comprehensive.title")}
          </h2>

          <p className="text-center text-base lg:text-lg font-normal text-muted-foreground max-w-2xl">
            {t("comprehensive.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start place-self-start bg-white rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] flex-none gap-8 h-full overflow-hidden  p-8 md:p-10 relative w-full border border-[#DEE0E3] transition hover:shadow-md"
            >
              <Image
                src={item.icon}
                alt={t(`comprehensive.features.${item.id}.title`)}
                width={20}
                height={20}
              />

              <div className="flex flex-col gap-4">
                <h6 className="text-xl lg:text-2xl font-medium mb-2">
                  {t(`comprehensive.features.${item.id}.title`)}
                </h6>

                <p className="text-sm lg:text-base font-normal text-muted-foreground">
                  {t(`comprehensive.features.${item.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comprehensive;
