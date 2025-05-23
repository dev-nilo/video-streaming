"use client";
import { Home, Compass, Play, History, FilePlus, Settings } from "lucide-react";

export default function Sidebar() {
  const itens = [
    { icon: <Home />, label: "Início" },
    { icon: <Compass />, label: "Explorar" },
    { icon: <Play />, label: "Inscrições" },
    { icon: <History />, label: "Histórico" },
    { icon: <FilePlus />, label: "Originais" },
    { icon: <Settings />, label: "Configurações" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-16 bg-gray-900 flex flex-col items-center py-4 space-y-6">
      {itens.map((item, i) => (
        <button key={i} className="text-gray-400 hover:text-white">
          {item.icon}
        </button>
      ))}
    </nav>
  );
}
