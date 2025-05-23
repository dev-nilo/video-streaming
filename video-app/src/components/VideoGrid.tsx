"use client";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";

type Video = {
  thumbnail: string;
  title: string;
  authorImg: string;
  authorName: string;
  views: string;
  date: string;
};

export default function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 12 }).map((_, i) => ({
      thumbnail: `/thumb${i % 6}.jpg`,
      title: `Vídeo ${i + 1}`,
      authorImg: `/author${i % 4}.jpg`,
      authorName: ["Alice", "Bob", "Carol", "Dave"][i % 4],
      views: `${(Math.random() * 5 + 1).toFixed(1)}M visualizações`,
      date: `${Math.floor(Math.random() * 10) + 1} dias atrás`,
    }));
    setVideos(data);
  }, []);

  return (
    <section className="px-6 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((v, i) => (
          <VideoCard key={i} video={v} />
        ))}
      </div>
    </section>
  );
}
