import { useRef, useEffect, useState } from 'react';

export default function Background3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId: number;
    let targetTime = 0;
    let currentTime = 0;

    const handleScroll = () => {
      // Ensure video metadata is loaded so we have a duration
      if (!video.duration || Number.isNaN(video.duration)) return;
      
      const scrollY = window.scrollY;
      const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      
      // Map scroll progress to video duration
      targetTime = scrollProgress * video.duration;
    };

    const loop = () => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        // Smooth interpolation (lerp) for buttery playback
        currentTime += (targetTime - currentTime) * 0.08;
        
        // Only update currentTime if the difference is significant (optimized for 96fps)
        if (Math.abs(video.currentTime - currentTime) > 0.005) {
          video.currentTime = currentTime;
        }
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(loop);

    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black flex items-center justify-center">
      {videoError && (
        <div className="absolute z-50 text-white/50 text-center p-4 border border-white/20 rounded-lg bg-black/50 backdrop-blur-sm max-w-md">
          <p className="font-bold mb-2">Video failed to load</p>
          <p className="text-sm">There was an issue loading the video from Cloudinary.</p>
        </div>
      )}
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dtmk93enn/video/upload/output_r8btnv.mp4"
        crossOrigin="anonymous"
        className="w-full h-full object-cover opacity-50"
        muted
        playsInline
        preload="auto"
        onError={() => setVideoError(true)}
        onLoadedData={() => setVideoError(false)}
      />
      {/* Gradient overlay to ensure text remains readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
    </div>
  );
}
