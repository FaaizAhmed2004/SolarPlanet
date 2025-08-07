'use client'
import { useState, useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  videoSources: {
    src: string;
    type: string;
  }[];
  posterImage: string;
  fallbackImage: string;
  className?: string;
  children?: React.ReactNode;
}

export default function VideoBackground({
  videoSources,
  posterImage,
  fallbackImage,
  className = '',
  children
}: VideoBackgroundProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      setVideoError(false);
    };

    const handleError = () => {
      setVideoError(true);
      setVideoLoaded(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Enhanced Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-100' : 'opacity-0'
        }`}
        poster={posterImage}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
        style={{
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      >
        {videoSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        <p className="sr-only">Your browser does not support the video tag.</p>
      </video>
      
      {/* Fallback Background Image */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
          !videoLoaded || videoError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${fallbackImage})` }}
      />
      
      {/* Enhanced Loading State */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background">
          <div className="content-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-6 glow-orange"></div>
            <p className="text-foreground text-lg font-medium">Loading video experience...</p>
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Overlay */}
      {children}
    </div>
  );
}