import Image from "next/image";

const WaffControlled = () => {
  const channels = [
    {
      icons: "/staff/icons/attendances.svg",
      name: "Attendances",
      description:
        "Monitor daily employee attendance, check-in statuses, and reasons.",
    },
    {
      icons: "/staff/icons/action.svg",
      name: "Actions",
      description:
        "Track employee entries and exits through various access methods and gates.",
    },
    {
      icons: "/staff/icons/screen.svg",
      name: "Screenshots",
      description:
        "Monitor activities across various apps and sites over time.",
    },
    {
      icons: "/staff/icons/visited.svg",
      name: "Visited Sites",
      description: "Track and monitor websites visited by users.",
    },
    {
      icons: "/staff/icons/key_logs.svg",
      name: "Key Logs",
      description: "Track employee actions and search queries over time.",
    },
    {
      icons: "/staff/icons/blocking.svg",
      name: "Blocking sites and apps",
      description: "Restrict access to sites/apps.",
    },
    {
      icons: "/staff/icons/computer.svg",
      name: "Computer",
      description:
        "View the list of computers and monitor their current status.",
    },
    {
      icons: "/staff/icons/visitors.svg",
      name: "Visitors",
      description: "Track organization guests, visit times, and their hosts.",
    },
    {
      icons: "/staff/icons/gates.svg",
      name: "Gates",
      description:
        "Manage access points and assign multiple devices to each gate.",
    },
    {
      icons: "/staff/icons/devices.svg",
      name: "Devices",
      description:
        "Manage gate-attached devices, their details, and operation types.",
    },
    {
      icons: "/staff/icons/reason.svg",
      name: "Reason Types",
      description:
        "Manage various reasons directly related to employee attendance.",
    },
    {
      icons: "/staff/icons/work.svg",
      name: "Work Schedules",
      description:
        "Create and manage specific work hours for departments or employees.",
    },
  ];
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="p-0 lg:p-8 flex flex-col gap-10 items-center pb-25">
          <h2 className="text-4xl lg:text-5xl font-medium w-full lg:w-150 text-center ">
            Controlled Channels
          </h2>
          <p className="w-full lg:w-175 text-center text-lg lg:text-xl text-muted-foreground">
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

export default WaffControlled;
