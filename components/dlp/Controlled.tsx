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
      name: "Web-Site Control",
      description: "Manage website access.",
    },
    {
      icons: "/dlp/icons/email.svg",
      name: "Email control",
      description: "Oversee email activity.",
    },
    {
      icons: "/dlp/icons/print.svg",
      name: "Printing control",
      description: "Monitor printed documents.",
    },
    {
      icons: "/dlp/icons/usb.svg",
      name: "USB storages Control",
      description: "Control USB usage.",
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
    <section className="w-full py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="p-0 lg:p-8 flex flex-col gap-10 items-center pb-25">
          <h2 className="text-3xl lg:text-5xl font-medium w-full lg:w-150 text-center ">
            Controlled Channels
          </h2>
          <p className="w-full lg:w-175 text-lg lg:text-xl text-muted-foreground text-center">
            Monitor and manage secure communication pathways within your
            network.
          </p>
        </div>

        <div className="bg-white border border-[#DEE0E3] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] py-5 lg:py-8 px-5 lg:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16 relative overflow-hidden">
          {channels.map((item, index) => {
            return (
              <div key={index} className="p-0 lg:p-6 flex flex-col gap-3">
                <div className="text-2xl text-blue-600 border w-14 h-14 flex items-center justify-center rounded-xl">
                  <Image
                    src={item.icons}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                </div>

                <h3 className="text-base lg:text-lg font-medium">{item.name}</h3>

                <p className="text-sm lg:text-base font-normal text-muted-foreground">
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
