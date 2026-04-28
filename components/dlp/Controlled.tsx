import Image from "next/image";

type Item = {
  icons: string;
  name: string;
  description: string;
};

const Controlled = () => {
  const channels: Item[] = [
    {
      icons: "/dlp/icons/web.svg",
      name: "Web Monitoring",
      description: "Track web traffic for suspicious activity.",
    },
    {
      icons: "/dlp/icons/email.svg",
      name: "Email Monitoring",
      description: "Oversee email activity.",
    },
    {
      icons: "/dlp/icons/print.svg",
      name: "Printing control",
      description: "Track and analyze device activity.",
    },
    {
      icons: "/dlp/icons/usb.svg",
      name: "USB storages Control",
      description: "Regulate USB use.",
    },
    {
      icons: "/dlp/icons/microphone.svg",
      name: "Audio surveillance",
      description: "Track audio interactions.",
    },
    {
      icons: "/dlp/icons/monitor.svg",
      name: "Employee monitor surveillance",
      description: "Screen employee activity.",
    },
    {
      icons: "/dlp/icons/exclamation.svg",
      name: "Detecting sensitive data",
      description: "Identify sensitive data leaks.",
    },
    {
      icons: "/dlp/icons/block.svg",
      name: "Blocking sites and apps",
      description: "Restrict access to sites/apps.",
    },
    {
      icons: "/dlp/icons/server_control.svg",
      name: "File server control",
      description: "Control server file usage.",
    },

    {
      icons: "/dlp/icons/telegram.svg",
      name: "Telegram monitoring",
      description: "Track Telegram communications.",
    },
    {
      icons: "/dlp/icons/usb_control.svg",
      name: "USB devices control",
      description: "Monitor USB devices.",
    },
    {
      icons: "/dlp/icons/keyboard.svg",
      name: "Keyboard control",
      description: "Log keyboard input.",
    },
    {
      icons: "/dlp/icons/video.svg",
      name: "Video surveillance",
      description: "Monitor video activity.",
    },

    {
      icons: "/dlp/icons/screen.svg",
      name: "Employee screenshots tracking",
      description: "Capture screen snapshots.",
    },
    {
      icons: "/dlp/icons/clipboard.svg",
      name: "Clipboard control",
      description: "Monitor clipboard usage.",
    },
    {
      icons: "/dlp/icons/squares.svg",
      name: "Tracking installed software.",
      description: "Track installed applications. ",
    },
    {
      icons: "/dlp/icons/file_monitoring.svg",
      name: "File monitoring",
      description: "Monitor file movement.",
    },
    {
      icons: "/dlp/icons/watermarking.svg",
      name: "Screen watermarking",
      description: "Protect Data with Watermarks.",
    },
  ];

  return (
    <section className="w-full py-10  bg-[#F9FAFB] pt-30 pb-50 ">
      <div className="mx-auto max-w-7xl px-6">
        <div className="p-8  flex flex-col gap-10 items-center pb-25">
          <h1 className="text-5xl font-medium w-150 text-center ">
            Controlled Channels
          </h1>
          <p className="w-175 text-center text-[20px] text-muted-foreground">
            Monitor and manage secure communication pathways within your
            network.
          </p>
        </div>

        <div className="bg-white border rounded-2xl grid grid-cols-3 p-6 gap-8">
          {channels.map((item, index) => {
            return (
              <div key={index} className="p-6  flex flex-col gap-3">
                <div className="text-2xl text-blue-600 border w-14 h-14 flex items-center justify-center rounded-xl">
                  <Image
                    src={item.icons}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </div>

                <h3 className="text-lg font-medium">{item.name}</h3>

                <p className="text-base font-normal text-muted-foreground">
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

export default Controlled;
