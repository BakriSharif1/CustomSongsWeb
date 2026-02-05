"use client";

import { useRef, useState } from "react";
import Button from "@/components/Button";

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <audio ref={audioRef} src={src} onEnded={() => setIsPlaying(false)} />
      <Button type="button" variant="secondary" onClick={toggle}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      {title && <span className="text-sm text-rosewood/70">{title}</span>}
    </div>
  );
}
