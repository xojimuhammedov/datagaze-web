"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import dlp_logo from "@/public/dlp/dlp_logo.svg";
import dlp_img from "@/public/dlp/img1.svg";
import siem_logo from "@/public/siem/siem_logo.svg";
import siem_img from "@/public/siem/img.svg";
import staff_logo from "@/public/staff/staff_logo.svg";
import staff_img from "@/public/staff/staff.png";
import waff_logo from "@/public/waff/waff_logo.svg";
import waff_img from "@/public/waff/img_waff.svg";

const products = [
  {
    title: "Datagaze DLP",
    href: "/dlp",
    description: "System monitors flow of data exchanged on your network.",
    logo: dlp_logo,
    image: dlp_img,
  },
  {
    title: "Datagaze SIEM",
    href: "/siem",
    description: "Monitors and analyzes security events across your network.",
    logo: siem_logo,
    image: siem_img,
  },
  {
    title: "Datagaze Staff",
    href: "/staff",
    description: "Monitors and analyzes staff activities and productivity.",
    logo: staff_logo,
    image: staff_img,
  },
  {
    title: "Datagaze WAF",
    href: "/waff",
    description: "Protects web applications from common web exploits.",
    logo: waff_logo,
    image: waff_img,
  },
];

const resources = [
  {
    title: "Documentation",
    href: "#",
    description: "Read about product technical docs",
  },
  {
    title: "Blog",
    href: "#",
    description: "Industry articles and and useful insights",
  },
  {
    title: "Events",
    href: "#",
    description: "Company and product updates",
  },
];
const productOptions = ["Analytics", "Dashboards", "Automation"];
const languageOptions = [{ label: "English", value: "en" }];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItemBase = "h-[40px] px-[14px] py-[10px] flex items-center gap-[6px] text-sm font-medium text-gray-800 transition-colors bg-[rgba(10,15,41,0.04)] hover:bg-[rgba(10,15,41,0.08)] no-underline whitespace-nowrap";

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex w-full items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/datagaze-logo-full-color-rgb.svg"
              alt="logo"
              width={180}
              height={40}
              className="w-[160px]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu viewport={false} className="max-w-none">
            <NavigationMenuList className="gap-1">
              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navItemBase} !rounded-l-[40px] !rounded-r-[4px] hover:!bg-[rgba(10,15,41,0.08)] data-[state=open]:!bg-[rgba(10,15,41,0.08)]`}>
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                  <ul className="flex flex-col w-[286px] p-3 gap-2 shadow-[0px_40px_64px_-32px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    {products.map((product) => (
                      <NavigationMenuLink key={product.title} asChild>
                        <Link
                          href={product.href}
                          className="flex flex-col items-start cursor-pointer gap-4 h-min overflow-hidden p-2 relative no-underline w-full hover:bg-[rgba(10,15,41,0.08)] transition-colors rounded-[8px]"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 flex items-center justify-center border rounded-lg bg-white overflow-hidden p-1.5 shadow-sm">
                              <Image
                                src={product.logo}
                                alt={product.title}
                                width={28}
                                height={28}
                                className="object-contain"
                              />
                            </div>
                            <h4 className="text-base font-medium text-gray-900 leading-tight">
                              {product.title}
                            </h4>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/service" className={`${navItemBase} !rounded-[4px] hover:bg-[rgba(10,15,41,0.08)]`}>
                    Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Resources */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${navItemBase} !rounded-[4px] hover:!bg-[rgba(10,15,41,0.08)] data-[state=open]:!bg-[rgba(10,15,41,0.08)]`}>
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent className="md:left-1/2 md:-translate-x-1/2 md:top-full md:mt-2">
                  <ul className="flex flex-col w-[356px] p-3 gap-[10px] shadow-[0px_40px_64px_-32px_rgba(0,0,0,0.1)] relative overflow-hidden">
                    {resources.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="flex flex-col items-start cursor-pointer gap-6 h-min overflow-hidden p-4 relative no-underline bg-white w-full hover:bg-[rgba(10,15,41,0.08)] transition-colors rounded-[8px]"
                          >
                            <div className="flex flex-col gap-2">
                              <span className="text-base font-medium text-gray-900">
                                {item.title}
                              </span>

                              <p className="text-sm text-gray-500 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="#" className={`${navItemBase} !rounded-[4px] hover:bg-[rgba(10,15,41,0.08)]`}>
                    News
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/about" className={`${navItemBase} !rounded-l-[4px] !rounded-r-[40px] hover:bg-[rgba(10,15,41,0.08)]`}>
                    Company
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="flex items-center bg-[rgba(10,15,41,0.04)] rounded-l-[100px] rounded-r-[12px] gap-[6px] px-[12px] py-[10px] h-[40px] w-min relative overflow-hidden">
            <Globe className=" w-4 h-4 text-gray-600" />

            <select className="text-xs appearance-none bg-transparent outline-none cursor-pointer font-medium">
              {languageOptions.map((language) => (
                <option key={language.value}>{language.label}</option>
              ))}
            </select>
          </div>

          <Link
            href="/contact"
            className="text-xs bg-[#2563eb] text-white w-[90px] h-[40px] flex items-center justify-center rounded-l-[12px] rounded-r-[100px] font-normal shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)] no-underline"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-t p-4 lg:hidden flex flex-col gap-3">
          <select className="bg-gray-100 p-3">
            <option disabled selected>
              Products
            </option>

            {productOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>

          <Link href="#" className="bg-gray-100 p-3">
            Services
          </Link>

          <Link href="#" className="bg-gray-100 p-3">
            News
          </Link>

          <Link href="#" className="bg-gray-100 p-3">
            Company
          </Link>
        </div>
      )}
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block rounded-md p-3 hover:bg-gray-100">
          <div className="text-sm font-medium">{title}</div>

          <p className="text-sm text-gray-500">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
