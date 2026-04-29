import Image from "next/image";
import { AiFillAudio } from "react-icons/ai";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaKeyboard, FaUsb } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import {
  MdExtension,
  MdLocalPrintshop,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { PiMailboxFill, PiMonitorFill } from "react-icons/pi";
const ControlledStaff = () => {
  const channelsSiem = [
    {
      icons: "/siem/icons/web_monitoring.svg",
      name: "Web Monitoring",
      description: "Track web traffic for suspicious activity.",
    },
    {
      icons: "/siem/icons/email.svg",
      name: "Email Monitoring",
      description: "Log and alert on email security threats.",
    },
    {
      icons: "/siem/icons/network.svg",
      name: " Network Device Monitoring",
      description: "Track and analyze device activity.",
    },
    {
      icons: "/siem/icons/internet_globe.svg",
      name: "Internet of Things",
      description: "Monitor IoT security events.",
    },
    {
      icons: "/siem/icons/user.svg",
      name: "User Behavior Monitoring",
      description: "Analyze employee activity for anomalies.",
    },
    {
      icons: "/siem/icons/sensitive.svg",
      name: "Sensitive Data Alerts",
      description: "Detect sensitive data movements",
    },
    {
      icons: "/siem/icons/server_monitoring.svg",
      name: "File Server Monitoring",
      description: "Track file access and server logs.",
    },
    {
      icons: "/siem/icons/incident.svg",
      name: "Incident Detection",
      description: "Alert on unusual events across systems.",
    },
    {
      icons: "/siem/icons/pulse.svg",
      name: "App Activity Monitoring",
      description: "Log application access for threats.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-8 flex flex-col gap-10 items-center pb-20">
          <h2 className="text-5xl font-medium w-150 text-center ">
            Controlled Channels
          </h2>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Monitor and manage secure communication pathways within your
            network.
          </p>
        </div>
 
        <div className="bg-white border border-[#DEE0E3] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] py-8 px-6 grid grid-cols-3 gap-16 relative overflow-hidden">
          {channelsSiem.map((item, index) => {
            return (
              <div key={index} className="p-6 flex flex-col gap-3">
                <div className="text-2xl text-blue-600 border w-14 h-14 flex items-center justify-center rounded-xl">
                  <Image
                    src={item.icons}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </div>

                <h3 className="text-lg font-medium">{item.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ControlledStaff;
