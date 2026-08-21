import React, { useState, useRef, useEffect } from 'react';
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
  autoPlayOnClick = true,
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

  // Format seconds to mm:ss
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
      className="group relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 shadow-md border border-rose-100 transition-all duration-300"
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
        className="w-full h-full object-cover transition-opacity duration-300"
      />

      {/* Initial Play Overlay (Before user clicks) */}
      {!hasStarted && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-between p-4 z-10 cursor-pointer transition-all duration-300 group-hover:bg-slate-950/60">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/90 text-white backdrop-blur-md shadow-sm">
              <MonitorPlay className="w-3.5 h-3.5" />
              Interactive Video Demo
            </span>
            <span className="text-xs font-medium text-white/80 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded">
              Click to Play Inline
            </span>
          </div>

          <div className="flex items-center justify-center my-auto">
            <div className="w-14 h-14 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg shadow-rose-500/40 group-hover:scale-110 group-hover:bg-rose-600 transition-transform duration-300">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>
          </div>

          {caption && (
            <p className="text-xs text-slate-200 line-clamp-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
              {caption}
            </p>
          )}
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] z-20 pointer-events-none">
          <div className="w-10 h-10 border-3 border-rose-400/30 border-t-rose-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Error Fallback Notice */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 text-white p-4 text-center z-20">
          <AlertCircle className="w-8 h-8 text-rose-400 mb-2" />
          <p className="text-sm font-semibold text-rose-200">Video Demo Stream Offline</p>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">
            A static preview poster is active. You can still test interactive project features directly in the details modal.
          </p>
          <button
            onClick={handleRestart}
            className="mt-3 px-3 py-1.5 text-xs font-medium bg-rose-600 hover:bg-rose-500 rounded-md text-white transition-colors"
          >
            Retry Video
          </button>
        </div>
      )}

      {/* Inline Controls (Visible when active or hovered) */}
      {hasStarted && !hasError && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-3 bg-gradient-to-t from-black/85 via-transparent to-black/40 z-20 transition-opacity duration-300 ${
            isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) togglePlay();
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md truncate max-w-[200px]">
              {title}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={cyclePlaybackRate}
                className="text-[11px] font-bold text-rose-200 hover:text-white bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded transition-colors"
                title="Change playback speed"
              >
                {playbackRate}x
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="p-1 rounded text-white/80 hover:text-white bg-white/15 hover:bg-white/25 transition-colors"
                title="Restart video"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Play/Pause button on pause */}
          {!isPlaying && !isLoading && (
            <div className="flex items-center justify-center my-auto">
              <button
                type="button"
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-rose-500/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                title="Play"
              >
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </button>
            </div>
          )}

          {/* Bottom Controls Bar */}
          <div className="space-y-1.5 mt-auto">
            {/* Scrubber Range */}
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-rose-500 hover:h-2 transition-all"
                title="Seek timeline"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-white">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="p-1.5 rounded hover:bg-white/20 text-white transition-colors"
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1.5 rounded hover:bg-white/20 text-white transition-colors"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-300" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] font-mono text-slate-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded hover:bg-white/20 text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
