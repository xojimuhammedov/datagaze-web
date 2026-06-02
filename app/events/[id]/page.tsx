"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import photo1 from "@/public/expert_insight/photo1.avif";
import photo2 from "@/public/expert_insight/photo2.avif";
import dayjs from "dayjs";

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const localTranslations: Record<string, { back: string; loading: string; error: string; notFound: string }> = {
  uz: {
    back: "Orqaga",
    loading: "Yuklanmoqda...",
    error: "Ma'lumot yuklashda xatolik yuz berdi.",
    notFound: "Tadbir topilmadi.",
  },
  ru: {
    back: "Назад",
    loading: "Загрузка...",
    error: "Произошла ошибка при загрузке данных.",
    notFound: "Событие не найдено.",
  },
  en: {
    back: "Back",
    loading: "Loading...",
    error: "An error occurred while loading the data.",
    notFound: "Event not found.",
  },
};

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "uz";
  const tLocal = localTranslations[currentLang] || localTranslations.uz;

  const [event, setEvent] = useState<EventItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!params?.id) return;

    const fetchEventDetail = async () => {
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://91.190.159.71:1337/api";
        const res = await fetch(`${apiBase}/events/${params.id}?populate=*`);
        if (!res.ok) {
          throw new Error("Failed to fetch event detail");
        }
        const json = await res.json();
        const item = json.data;

        if (!item) {
          setError(true);
          return;
        }

        const attrs = item.attributes || item;
        const id = item.id;

        // Get localized title and description
        const title = attrs[`title_${currentLang}`] || attrs.title_uz || attrs.title || "";
        const description = attrs[`description_${currentLang}`] || attrs.description_uz || attrs.description || "";
        const date = attrs.date || attrs.publishedAt || attrs.createdAt || "";

        // Extract image URL
        let imageUrl = "";
        const imgObj = attrs.image || attrs.cover || attrs.photo;
        if (imgObj) {
          if (Array.isArray(imgObj) && imgObj.length > 0) {
            imageUrl = imgObj[0].url || imgObj[0].attributes?.url || "";
          } else if (imgObj.data?.attributes?.url) {
            imageUrl = imgObj.data.attributes.url;
          } else if (imgObj.url) {
            imageUrl = imgObj.url;
          }
        }

        if (imageUrl && !imageUrl.startsWith("http")) {
          const host = apiBase.replace(/\/api\/?$/, "");
          imageUrl = `${host}${imageUrl}`;
        }

        const defaultPhotos = [photo1.src, photo2.src];
        const formattedEvent: EventItem = {
          id,
          title,
          description,
          date,
          imageUrl: imageUrl || defaultPhotos[id % defaultPhotos.length],
        };

        setEvent(formattedEvent);
      } catch (err) {
        console.error("Error fetching event detail:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetail();
  }, [params.id, currentLang]);

  return (
    <main className=" py-32 bg-[#f7f7f8]">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back navigation button */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center gap-2 hover:bg-gray-250 transition-colors text-gray-700 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{tLocal.back}</span>
          </Button>
        </div>

        {loading ? (
          <div className="animate-pulse space-y-6">
            <div className="h-[450px] bg-gray-200 rounded-2xl w-full" />
            <div className="h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
            </div>
          </div>
        ) : error || !event ? (
          <Card className="p-8 text-center bg-white shadow-sm border border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 font-semibold mb-2">
                {error ? tLocal.error : tLocal.notFound}
              </CardTitle>
              <CardDescription>
                Please try again later or return to the home page.
              </CardDescription>
            </CardHeader>
            <div className="mt-6">
              <Button onClick={() => router.push("/")} className="shadow rounded-lg">
                Home
              </Button>
            </div>
          </Card>
        ) : (
          <article className="transition-all duration-300">
            <h1 className="text-2xl sm:text-4xl font-semibold leading-tight text-gray-900 pb-6">
              {event.title}
            </h1>
            {event.imageUrl && (
              <div className="relative w-full h-[300px] sm:h-[450px]">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}

            <div className="py-4">
              <span className="inline-block text-sm text-gray-500 bg-gray-50 rounded-full border border-gray-100">
                {dayjs(event.date).format("DD MMM YYYY")}
              </span>

              <div className="prose max-w-none text-base sm:text-lg text-gray-700 leading-relaxed whitespace-pre-line border-t border-gray-100 pt-6 sm:pt-8">
                {event.description}
              </div>
            </div>
          </article>
        )}
      </div>
    </main>
  );
}
