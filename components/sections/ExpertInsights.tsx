import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import photo1 from "@/public/expert_insight/photo1.avif";
import photo2 from "@/public/expert_insight/photo2.avif";
import { Button } from "../ui/button";
import Link from "next/link";

const ExpertInsights = () => {
  return (
    <section className="w-full py-20  bg-[#F9FAFB] pb-50">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className=" flex flex-col items-center text-center gap-6 pb-30">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900">
            Stay Ahead with Expert Insights
          </h2>

          <p className="text-xl  sm:text-lg text-gray-600 max-w-2xl">
            Gain valuable perspectives on the latest trends in cybersecurity.
            Our team shares in-depth research, company news, and actionable
            insights to help you stay informed and secure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <Card className="relative mx-auto w-full  p-3 gap-0">
            <div className="" />
            <img
              src={photo1.src}
              alt="Event cover"
              className="rounded-xl object-cover h-80"
            />
            <CardHeader className="pt-10">
              <CardTitle className="text-2xl">
                Global maydonga yana bir qadam
              </CardTitle>

              <CardDescription className="pt-5 flex flex-col gap-0.5 pb-5">
                <span className="text-lg">4/19/25</span> <br />
                <span className="text-lg">
                  O'tgan hafta muhim voqeliklarga boy bo'ldi. 17–19-aprel
                  kunlari Istanbul shahrida bo‘lib o‘tgan "Euroasia Techweek
                  2025" xalqaro texnologik forumida kompaniyamiz vakillari
                  O‘zbekiston delegatsiyasi tarkibida ishtirok etdilar.
                </span>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="relative mx-auto w-full  p-3 gap-0">
            <div className="" />
            <img
              src={photo2.src}
              alt="Event cover"
              className="rounded-2xl object-cover h-80"
            />
            <CardHeader className="pt-10">
              <CardTitle className="text-2xl">
                “Datagaze” – O‘zbekiston kiberxavfsizlik bozorining yetakchisiga
                aylangan milliy brend
              </CardTitle>

              <CardDescription className="pt-5 flex flex-col gap-0.5">
                <span className="text-lg">4/21/25</span> <br />
                <span className="text-lg">
                  “Datagaze” – O‘zbekiston kiberxavfsizlik bozorining
                  yetakchisiga aylangan milliy brend
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Button className="rounded-lg py-5 shadow" variant="outline">
            <Link href="/">See more articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsights;
