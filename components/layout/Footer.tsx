import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full pb-10 bg-[#F9FAFB]">
      <div className=" mx-auto max-w-7xl px-6 pb-15">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          <div>
            <Link href="/">
              <Image
                src="/images/datagaze-logo-full-color-rgb.svg"
                alt="logo"
                width={200}
                height={40}
                className="w-[160px] grayscale opacity-70 "
              />
            </Link>
          </div>

          <div className="flex gap-10">
            <Link href="/" className="text-xl text-muted-foreground">
              Company
            </Link>
            <Link href="/" className="text-xl text-muted-foreground">
              Services
            </Link>
            <Link href="/" className="text-xl text-muted-foreground">
              Blog
            </Link>
            <Link href="/" className="text-xl text-muted-foreground">
              Contacts
            </Link>
          </div>

          <div className=" flex gap-5">
            <Link href="" target="blank">
              <IoLogoLinkedin size={25} className="text-muted-foreground" />
            </Link>

            <Link href="" target="blank">
              <RiInstagramFill size={25} className="text-muted-foreground" />
            </Link>
            <Link
              href="https://t.me/datagaze_official"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={25} className="text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" border-muted-foreground/30 border mx-10  "></div>

      <div className="flex flex-col gap-3 mx-auto max-w-7xl px-6 pt-15 ">
        <span className="text-[#5E5E5E] text-xl">
          © 2026 Datagaze LLC. All rights reserved.
        </span>

        <span className="text-muted-foreground text-base">
          Unauthorized copying or distribution of any material without prior
          written consent is strictly prohibited.
        </span>
      </div>
    </section>
  );
};

export default Footer;
