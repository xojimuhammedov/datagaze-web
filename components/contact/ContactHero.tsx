import { Mailbox, Phone } from "lucide-react";

const ContactHero = () => {
  const contacts = [
    {
      contact: "+998 93 561 14 22",
      description: "Call Us Anytime: We’re Here to Help",
      icon: <Phone className=" text-blue-600 size-8" />,
    },
    {
      contact: "info@datagaze.uz",
      description: "Drop Us a Line: We’ll Reply Promptly",
      icon: <Mailbox className="text-blue-600 size-8" />,
    },
  ];

  return (
    <section className="w-full py-20  bg-[#F9FAFB]  pt-40">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-20 flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl sm:text-4xl lg:text-5xl max-w-3xl font-semibold leading-tight text-gray-900">
            Contact us
          </h1>

          <p className="text-base  sm:text-lg text-gray-600 max-w-2xl">
            Do you have any questions or simply want to get in touch? Contact
            us, and we will respond ASAP!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="p-10 bg-white rounded-xl shadow flex flex-col gap-5"
            >
              <div>{item.icon}</div>
              <h3 className="text-2xl font-normal">{item.contact}</h3>
              <p className="text-muted-foreground ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
