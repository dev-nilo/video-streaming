"use client";
import Image from "next/image";

type Video = {
  thumbnail: string;
  title: string;
  views: string;
  date: string;
  authorImg: string;
  authorName: string;
};

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-700">
      <div className="relative h-40 w-full">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3 flex space-x-3">
        <Image
          src={video.authorImg}
          alt={video.authorName}
          width={32}
          height={32}
          className="rounded-full"
        />
        {/* <div className="flex-1">
          <p className="text-white font-medium line-clamp-2">{video.title}</p>
          <p className="text-gray-400 text-sm">{video.authorName}</p>
          <p className="text-gray-500 text-xs">
            {video.views} • {video.date}
          </p>
        </div> */}
      </div>
    </div>
  );
}
