"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import photo1 from "@/public/expert_insight/photo1.avif";
import photo2 from "@/public/expert_insight/photo2.avif";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ExpertInsights = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-16 pb-20 lg:py-20 lg:pb-50">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className=" flex flex-col items-center text-center gap-6 pb-30">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900">
            {t('expert_insights.title')}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            {t('expert_insights.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="relative mx-auto w-full  p-3 gap-0">
            <div className="" />
            <img
              src={photo1.src}
              alt="Event cover"
              className="rounded-xl object-cover h-80"
            />
            <CardHeader className="pt-10">
              <CardTitle className="text-xl lg:text-2xl">
                {t('expert_insights.articles.article1.title')}
              </CardTitle>

              <CardDescription className="pt-5 flex flex-col gap-0.5 pb-5">
                <span className="text-base lg:text-lg">4/19/25</span> <br />
                <span className="text-base lg:text-lg">
                  {t('expert_insights.articles.article1.text')}
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
              <CardTitle className="text-xl lg:text-2xl">
                {t('expert_insights.articles.article2.title')}
              </CardTitle>

              <CardDescription className="pt-5 flex flex-col gap-0.5">
                <span className="text-base lg:text-lg">4/21/25</span> <br />
                <span className="text-base lg:text-lg">
                  {t('expert_insights.articles.article2.text')}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="flex justify-center mt-10">
          <Button className="rounded-lg py-5 shadow" variant="outline">
            <Link className="text-xs lg:text-sm" href="/">{t('expert_insights.see_more')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsights;
