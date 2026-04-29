import { Mailbox, Phone } from "lucide-react";

const ContactHero = () => {
  const contacts = [
    {
      contact: "+998 93 561 14 22",
      href: "tel:+998935611422",
      description: "Call Us Anytime: We’re Here to Help",
      icon: <Phone fill="#1153E3" className="text-blue-600 size-8" />,
    },
    {
      contact: "info@datagaze.uz",
      href: "mailto:info@datagaze.uz",
      description: "Drop Us a Line: We’ll Reply Promptly",
      icon: (
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 17C11 17.2652 10.8946 17.5196 10.7071 17.7071C10.5196 17.8946 10.2652 18 10 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17C4 16.7348 4.10536 16.4804 4.29289 16.2929C4.48043 16.1054 4.73478 16 5 16H10C10.2652 16 10.5196 16.1054 10.7071 16.2929C10.8946 16.4804 11 16.7348 11 17ZM19 2H22C22.2652 2 22.5196 1.89464 22.7071 1.70711C22.8946 1.51957 23 1.26522 23 1C23 0.734784 22.8946 0.48043 22.7071 0.292893C22.5196 0.105357 22.2652 0 22 0H18C17.7348 0 17.4804 0.105357 17.2929 0.292893C17.1054 0.48043 17 0.734784 17 1V5H19V2ZM28 12.5V20C28 20.5304 27.7893 21.0391 27.4142 21.4142C27.0391 21.7893 26.5304 22 26 22H15V26C15 26.2652 14.8946 26.5196 14.7071 26.7071C14.5196 26.8946 14.2652 27 14 27C13.7348 27 13.4804 26.8946 13.2929 26.7071C13.1054 26.5196 13 26.2652 13 26V22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V12.5C0.00231576 10.5116 0.793236 8.60528 2.19926 7.19926C3.60528 5.79324 5.51159 5.00232 7.5 5H17V16C17 16.2652 17.1054 16.5196 17.2929 16.7071C17.4804 16.8946 17.7348 17 18 17C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V5H20.5C22.4884 5.00232 24.3947 5.79324 25.8007 7.19926C27.2068 8.60528 27.9977 10.5116 28 12.5ZM13 12.5C13 11.0413 12.4205 9.64236 11.3891 8.61091C10.3576 7.57946 8.95869 7 7.5 7C6.04131 7 4.64236 7.57946 3.61091 8.61091C2.57946 9.64236 2 11.0413 2 12.5V20H13V12.5Z" fill="#2663EB"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-20  bg-[#F9FAFB]  pt-40">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-16 flex flex-col items-center text-center gap-10">
          <h2 className="text-[64px] font-medium leading-none text-center text-gray-900 max-w-3xl">
            Contact us
          </h2>

          <p className="text-[20px] font-normal text-center text-[rgb(107,109,120)] max-w-2xl">
            Do you have any questions or simply want to get in touch? Contact us, and we will respond ASAP!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {contacts.map((item, index) => (
            <div
              key={index}
              className="p-10 bg-white rounded-xl shadow flex flex-col gap-5"
            >
              <div>{item.icon}</div>
              <a
                href={item.href}
                className="text-[30px] font-medium leading-none hover:underline hover:text-blue-600 transition-colors w-fit"
              >
                {item.contact}
              </a>
              <p className="text-muted-foreground ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
