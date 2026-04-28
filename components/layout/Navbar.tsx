"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "Analytics",
    href: "#",
    description: "Powerful analytics tools for your business.",
  },
  {
    title: "Dashboards",
    href: "#",
    description: "Visualize your data with modern dashboards.",
  },
  {
    title: "Automation",
    href: "#",
    description: "Automate workflows and improve efficiency.",
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
const languageOptions = [{ label: "Eng", value: "en" }];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItemClass =
    "bg-[#F7F7F8] px-4 py-3 rounded-xs text-sm font-medium text-gray-800 transition-colors ";

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto flex w-full items-center justify-between py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/datagaze-logo-full-color-rgb.svg"
              alt="logo"
              width={180}
              height={40}
              className="w-[130px]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2 border rounded-2xl shadow-md px-10">
          {/* Products Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass}>
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="#" className={navItemClass}>
            Services
          </Link>

          {/* Resources */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navItemClass}>
                  Resources
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="flex flex-col w-[240px] p-2">
                    {resources.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 rounded-md hover:bg-gray-100"
                          >
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-medium">
                                {item.title}
                              </span>

                              <p className="text-xs text-gray-500">
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
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="#" className={navItemClass}>
            News
          </Link>

          <Link href="/about" className={navItemClass}>
            Company
          </Link>
        </div>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center  rounded-2xl shadow-md gap-1 px-4 py-2 border">
            <Globe className=" w-4 h-4 text-gray-600" />

            <select className="text-base appearance-none">
              {languageOptions.map((language) => (
                <option key={language.value}>{language.label}</option>
              ))}
            </select>
          </div>

          <Link href="/contact" className="">
            <button className="text-base bg-[#0055FF] text-white px-5 py-2 rounded-2xl font-normal ">
              Get in touch
            </button>
          </Link>
        </div>

        {/* Mobile button */}
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
