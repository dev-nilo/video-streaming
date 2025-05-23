"use client"; // como usamos useState? se não precisar, remova

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/*     
      <Sidebar />
      <Header />
       */}
      <main>
        <VideoGrid />
      </main>
    </div>
  );
}
