"use client";

import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ShieldCheck } from "lucide-react";

interface VideoCardProps {
  src: string;
  poster?: string;
  title?: string;
}

export function VideoCard({
  src,
  poster = "/images/about-work.png",
  title = "On-Site Work Video",
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#172B40] border border-[#E5E0D7] shadow-sm group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={isMuted}
        playsInline
        onEnded={() => setIsPlaying(false)}
        className="w-full h-full object-cover"
      />

      {/* Authenticity Pill */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[#172B40] text-xs font-semibold shadow-xs flex items-center gap-1.5 z-10">
        <ShieldCheck className="w-4 h-4 text-[#21865B]" />
        <span>Authentic Video Footage</span>
      </div>

      {/* Overlay Controls */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="p-4 rounded-full bg-white/90 hover:bg-white text-[#172B40] shadow-xl transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58A58]"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
        </button>
      </div>

      {/* Bottom Bar: Mute and Title */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-white text-xs z-10">
        <span className="font-medium drop-shadow">{title}</span>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-1.5 rounded-md bg-black/50 hover:bg-black/70 text-white transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

