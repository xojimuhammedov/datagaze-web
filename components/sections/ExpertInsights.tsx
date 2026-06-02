"use client";
import { useState, useEffect } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

import photo1 from "@/public/expert_insight/photo1.avif";
import photo2 from "@/public/expert_insight/photo2.avif";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  documentId: string;
}

const ExpertInsights = () => {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const currentLang = i18n.language || "uz";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://91.190.159.71:1337/api";
        const res = await fetch(`${apiBase}/posts?populate=*`);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const json = await res.json();
        const data = json.data || [];

        const formattedPosts: Post[] = data.map((item: any) => {
          const attrs = item.attributes || item;
          const id = item.documentId;
          
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

          return {
            id,
            title,
            description,
            date,
            imageUrl,
          };
        });

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentLang]);

  console.log(posts)

  const defaultPhotos = [photo1.src, photo2.src];

  return (
    <section className="w-full py-16 pb-20 lg:py-20 lg:pb-50">
      <div className="mx-auto max-w-7xl px-6 ">
        <div className=" flex flex-col items-center text-center gap-6 pb-24 lg:pb-30">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-2xl font-medium leading-tight text-gray-900">
            {t('expert_insights.title')}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl">
            {t('expert_insights.description')}
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[1, 2].map((n) => (
              <Card key={n} className="relative mx-auto w-full p-3 gap-0 animate-pulse">
                <div className="rounded-xl bg-gray-200 h-80 w-full" />
                <CardHeader className="pt-10">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </CardHeader>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <Link href={`/posts/${post.id}`} key={post.id || index} className="w-full block">
                <Card className="relative mx-auto w-full p-3 flex flex-col cursor-pointer">
                  <div>
                    <img
                      src={post.imageUrl || defaultPhotos[index % defaultPhotos.length]}
                      alt={post.title}
                      className="rounded-xl object-cover h-80 w-full"
                    />
                    <CardHeader className="pt-10">
                      <CardTitle className="text-xl lg:text-2xl">
                        {post.title}
                      </CardTitle>

                      <CardDescription className="pt-5 flex flex-col gap-0.5 pb-5">
                        <span className="text-base">
                          {post.date}
                        </span>
                        <span className="text-base text-gray-700 line-clamp-4 mt-4">
                          {post.description}
                        </span>
                      </CardDescription>
                    </CardHeader>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">
          <Button className="rounded-lg py-5 shadow" variant="outline">
            <Link className="text-xs lg:text-sm" href="/news">{t('expert_insights.see_more')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsights;
