import Image from "next/image";

const Comprehensive = () => {
  const features = [
    {
      icon: "/services/detection.svg",
      title: "Threat Monitoring & Detection",
      description:
        "We monitor systems 24/7 and detect threats in real time (SOC, SIEM, XDR/EDR, Threat Hunting, UEBA).",
    },
    {
      icon: "/services/security_audit.svg",
      title: "Security Assessment & Audit",
      description:
        "We identify vulnerabilities (Vulnerability Assessment, Pentest, Risk Assessment) and ensure compliance with standards (ISO 27001, PCI DSS, GDPR).",
    },
    {
      icon: "/services/data.svg",
      title: "Data Security & Protection",
      description:
        "We safeguard your data (Encryption, Database Security, Secure Storage, Backup, Data Classification).",
    },
    {
      icon: "/services/security_compliance.svg",
      title: "Security Policies & Compliance",
      description:
        "We create security policies and documentation (ISMS, IT Security Policy, SOP, BCP, DRP).",
    },
    {
      icon: "/services/implementation.svg",
      title: "Security Solutions Implementation",
      description:
        "We protect your systems from attacks (NGFW, WAF, IDS/IPS, DLP, Anti-DDoS, Secure Email, EPP).",
    },
    {
      icon: "/services/identity.svg",
      title: "Identity & Access Management",
      description: "Identity & Access Management",
    },
    {
      icon: "/services/training.svg",
      title: "Training & Awareness",
      description:
        "We train staff and reduce phishing risks (Cybersecurity Training, Red Team, SOC Operator, Secure Coding).",
    },
    {
      icon: "/services/incident.svg",
      title: "Incident Response & Forensics",
      description:
        "We respond quickly to cyber incidents and investigate them (Cyber Incident Response, Digital Forensics, Log & Malware Analysis).",
    },
    {
      icon: "/services/software.svg",
      title: "IT & Software Solutions",
      description:
        "Complete IT infrastructure and software solutions: we build servers, networks, and cloud systems, integrate platforms, develop applications and SaaS, with 24/7 technical support.",
    },
  ];

  return (
    <section className="w-full py-16  sm:py-20 lg:py-30">
      <div className="mx-auto  w-full max-w-7xl  px-6 ">
        <div className="flex flex-col gap-2 items-center pb-15">
          <h1 className="text-center text-5xl sm:text-4xl lg:text-5xl max-w-2xl font-semibold leading-tight text-gray-900 pb-6">
            Comprehensive Cybersecurity Assessment: Safeguard Your System
          </h1>

          <p className="text-center text-[22px] font-medium  text-muted-foreground max-w-2xl">
            From penetration testing to employee training, our audit identifies
            vulnerabilities, strengthens defenses, and ensures your security
            protocols meet industry standards.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 w-full">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition flex flex-col gap-6"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={25}
                height={25}
                className="mb-4 "
              />

              <h3 className="text-xl font-semibold mb-2 w-60">{item.title}</h3>

              <p className="text-base font-normal text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comprehensive;
