"use client";
import { Search, Mic } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-16 right-0 h-16 bg-gray-800 flex items-center px-6 space-x-4">
      <div className="flex-1 flex items-center bg-gray-700 rounded-full px-4 py-2">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="ml-2 bg-transparent placeholder-gray-400 text-white focus:outline-none flex-1"
        />
        <button>
          <Mic className="text-gray-400" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        {/* ícones de câmera, notificações, avatar etc. */}
        <button className="text-gray-400 hover:text-white">🎥</button>
        <button className="text-gray-400 hover:text-white">🔔</button>
        <img src="/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}
