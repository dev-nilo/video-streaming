"use client";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Play, Pause, Volume2, Maximize2, Minimize2 } from "lucide-react";

export default function VideoPlayer({ url }: { url: string }) {
  const playerRef = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Alterna play/pause
  const togglePlay = () => setPlaying(!playing);

  // Alterna volume mudo / padrão
  const toggleMute = () => setVolume((prev) => (prev > 0 ? 0 : 0.8));

  // Controla fullscreen via API do elemento <video>
  const toggleFullscreen = () => {
    const iframe = playerRef.current?.getInternalPlayer() as HTMLVideoElement;
    if (!document.fullscreenElement) {
      iframe.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <div className="relative bg-black aspect-video">
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        width="100%"
        height="100%"
        controls={false}
      />

      {/* Controles customizados */}
      <div className="absolute bottom-4 left-4 flex items-center space-x-3 text-white">
        <button onClick={togglePlay}>{playing ? <Pause /> : <Play />}</button>
        <button onClick={toggleMute}>
          <Volume2 />
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>

      {/* Botão fullscreen */}
      <button
        className="absolute top-4 right-4 text-white"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? <Minimize2 /> : <Maximize2 />}
      </button>
    </div>
  );
}
