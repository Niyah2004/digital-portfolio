import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw, MonitorPlay, AlertCircle } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title: string;
  caption?: string;
  autoPlayOnClick?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  posterUrl,
  title,
  caption,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      setHasStarted(true);
      setIsLoading(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          })
          .catch((error) => {
            console.warn("Video playback was interrupted or restricted:", error);
            setIsPlaying(false);
            setIsLoading(false);
          });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setCurrentTime(current);
    setProgress((current / total) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekPercentage = parseFloat(e.target.value);
    if (videoRef.current && duration) {
      const seekTime = (seekPercentage / 100) * duration;
      videoRef.current.currentTime = seekTime;
      setProgress(seekPercentage);
      setCurrentTime(seekTime);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch((err) => {
        console.warn("Fullscreen request error:", err);
      });
    } else {
      document.exitFullscreen?.();
    }
  };

  const cyclePlaybackRate = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rates = [1, 1.25, 1.5, 2];
    const nextRate = rates[(rates.indexOf(playbackRate) + 1) % rates.length];
    videoRef.current.playbackRate = nextRate;
    setPlaybackRate(nextRate);
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div
      ref={containerRef}
      id={`video-container-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="group relative w-full aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-200/50 dark:border-slate-800 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={!hasStarted ? togglePlay : undefined}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        preload="metadata"
        playsInline
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => {
          setIsLoading(false);
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        className="w-full h-full object-cover"
      />

      {/* Initial Play Overlay */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-slate-950/40 hover:bg-slate-950/50 flex flex-col justify-between p-3.5 z-10 cursor-pointer transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 backdrop-blur-md">
              <MonitorPlay className="w-3 h-3 text-rose-500 dark:text-pink-400" />
              Demo Video
            </span>
            <span className="text-[10px] font-mono text-white/70 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded">
              Click to Play
            </span>
          </div>

          <div className="flex items-center justify-center my-auto">
            <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="w-5 h-5 fill-current translate-x-0.5 text-rose-500" />
            </div>
          </div>

          {caption && (
            <p className="text-[11px] text-slate-200 line-clamp-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded">
              {caption}
            </p>
          )}
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-20 pointer-events-none">
          <div className="w-8 h-8 border-2 border-pink-400/30 border-t-pink-400 rounded-full animate-spin" />
        </div>
      )}

      {/* Error Fallback Notice */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white p-4 text-center z-20">
          <AlertCircle className="w-6 h-6 text-rose-400 mb-1.5" />
          <p className="text-xs font-semibold text-rose-200">Video Demo Offline</p>
          <p className="text-[11px] text-slate-400 mt-0.5 max-w-xs">
            Static preview active. You can explore full details and source code below.
          </p>
          <button
            onClick={handleRestart}
            className="mt-2.5 px-2.5 py-1 text-xs font-medium bg-slate-800 hover:bg-slate-700 rounded-md text-white transition-colors cursor-pointer"
          >
            Retry Video
          </button>
        </div>
      )}

      {/* Inline Controls */}
      {hasStarted && !hasError && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-3 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20 transition-opacity duration-300 ${
            isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) togglePlay();
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded truncate max-w-[200px]">
              {title}
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={cyclePlaybackRate}
                className="text-[10px] font-mono text-white/80 hover:text-white bg-white/10 px-1.5 py-0.5 rounded transition-colors"
                title="Playback speed"
              >
                {playbackRate}x
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="p-1 rounded text-white/80 hover:text-white bg-white/10 transition-colors"
                title="Restart video"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause button on pause */}
          {!isPlaying && !isLoading && (
            <div className="flex items-center justify-center my-auto">
              <button
                type="button"
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                title="Play"
              >
                <Play className="w-4 h-4 fill-current translate-x-0.5 text-rose-500" />
              </button>
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div className="space-y-1 mt-auto">
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/25 rounded-lg appearance-none cursor-pointer accent-pink-400 hover:h-1.5 transition-all"
                title="Seek timeline"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1 rounded hover:bg-white/10 text-white transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1 rounded hover:bg-white/10 text-white transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-pink-300" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>

                <span className="text-[10px] font-mono text-slate-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1 rounded hover:bg-white/10 text-white transition-colors"
                title="Fullscreen"
              >
                <Maximize className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
