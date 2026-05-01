"use client";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import peron1 from "@/public/texnological/person1.avif";
import peron2 from "@/public/texnological/person2.avif";
import peron3 from "@/public/texnological/person3.avif";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";

const Environment = () => {
  const images = [peron1, peron2, peron3, peron1, peron2, peron3];

  const plugin = useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  );

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className="p-24M flex flex-col items-center text-center gap-6">
          <h2 className="text-4xl sm:text-4xl lg:text-5xl max-w-3xl font-semibold leading-tight text-gray-900">
            Something about our work environment
          </h2>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            We create a space where teamwork and new ideas come together to
            build effective cybersecurity solutions.
          </p>
        </div>

        <div className="relative w-full mt-16">
          {/* left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10" />

          {/* right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10" />

          <Carousel
            plugins={[plugin.current]}
            opts={{
              loop: true,
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="p-2">
                    <Image
                      src={img}
                      alt="image"
                      width={400}
                      height={300}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Environment;
