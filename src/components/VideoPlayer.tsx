'use client'

import { useEffect, useRef, useState } from 'react';

const fadeCursorAfter = 2000;
const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControl, setShowControl] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load Vimeo Player API
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.onload = () => initializePlayer();
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const initializePlayer = () => {
    if (!iframeRef.current || !(window as any).Vimeo) return;

    // Create player
    playerRef.current = new (window as any).Vimeo.Player(iframeRef.current);

    // Add event listeners
    playerRef.current.on('play', () => {
      setIsPlaying(true);
      startControlTimeout();
    });

    playerRef.current.on('pause', () => {
      setIsPlaying(false);
      setShowControl(true);
    });
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
      // Show control briefly then fade
      setShowControl(true);
      startControlTimeout();
    }
  };

  const startControlTimeout = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to hide controls after 2 seconds
    timeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControl(false);
      }
    }, fadeCursorAfter);
  };

  const handleMouseMove = () => {
    setShowControl(true);
    if (isPlaying) {
      startControlTimeout();
    }
  };

  return (
    <div className="pt-[56%] overflow-hidden" onClick={togglePlay} onMouseMove={handleMouseMove}>
      <iframe
        ref={iframeRef}
        className="absolute inset-0 w-full h-full rounded-3xl"
        src={`https://player.vimeo.com/video/${videoId}?background=1&autopause=0&byline=0&title=0&portrait=0`}
        frameBorder="0"
        allow="autoplay; fullscreen"
        style={{ pointerEvents: 'none' }}
      ></iframe>

      {/* Play button overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControl ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <svg className="w-14 h-14 text-black/75" fill="currentColor" viewBox="0 0 20 20">
          {isPlaying ? (
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </div>
    </div>
  );
};

export default VideoPlayer;
