"use client";

import React from "react";

type Video = { id: string; thumbnail: string; title: string; author: string };

const DUMMY_VIDEOS: Video[] = [
  { id: "1", thumbnail: "/thumb1.jpg", title: "Intro Next.js", author: "Jane" },
  {
    id: "2",
    thumbnail: "/thumb2.jpg",
    title: "Hooks Avançados",
    author: "John",
  },
  // adicione mais conforme precisar
];

export default function SuggestedVideos({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  return (
    <aside className="w-64 space-y-4">
      <h2 className="text-lg font-semibold">Vídeos Sugeridos</h2>
      {DUMMY_VIDEOS.map((video) => (
        <div
          key={video.id}
          className="flex cursor-pointer hover:bg-gray-100 p-2 rounded"
          onClick={() => onSelect(video.id)}
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-24 h-14 object-cover rounded"
          />
          <div className="ml-2">
            <p className="text-sm font-medium">{video.title}</p>
            <p className="text-xs text-gray-500">{video.author}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}
