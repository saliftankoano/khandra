"use client";
import { ChevronDownIcon, ChevronUpIcon, Volume2Icon } from "lucide-react";
import LeftSideBar from "../Components/LeftSideBar";
import RightSideBar from "../Components/RightSideBar";
import { useState, useRef, useEffect } from "react";

const videos = [
  "/video/vid1.mp4",
  "/video/vid2.mp4",
  "/video/vid3.mp4",
  "/video/vid4.mp4",
  "/video/vid5.mp4",
  "/video/vid6.mp4",
  "/video/vid7.mp4",
  "/video/vid8.mp4",
  "/video/vid9.mp4",
  "/video/vid10.mp4",
];

export default function Player() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Update current index based on scroll position
  const handleScroll = () => {
    if (!containerRef.current) return;

    const scrollTop = containerRef.current.scrollTop;
    const videoHeight = containerRef.current.clientHeight;
    const index = Math.round(scrollTop / videoHeight);

    if (index !== currentVideoIndex) {
      setCurrentVideoIndex(index);
    }
  };

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  // Play current video and pause others
  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentVideoIndex) {
          videoRef.play();
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  const togglePlay = () => {
    if (videoRefs.current[currentVideoIndex]) {
      if (isPlaying) {
        videoRefs.current[currentVideoIndex]?.pause();
      } else {
        videoRefs.current[currentVideoIndex]?.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      currentVideo.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div id="root" className="h-screen bg-black">
      <div className="flex h-full">
        <LeftSideBar />
        <main
          id="main-content"
          className="ml-[240px] flex-1 h-full flex justify-center bg-black"
        >
          <div className="relative h-full w-[calc(100vh*0.7)] max-w-[500px]">
            <div
              ref={containerRef}
              className="h-full w-full overflow-y-scroll snap-y snap-mandatory"
              onScroll={handleScroll}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {videos.map((videoSrc, index) => (
                <div
                  key={videoSrc}
                  className="h-full w-full snap-start snap-always relative"
                >
                  <div className="w-full h-full" onClick={togglePlay}>
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="w-full h-full object-cover"
                      autoPlay={index === currentVideoIndex}
                      muted={isMuted}
                      playsInline
                      loop
                    >
                      <source src={videoSrc} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col absolute -right-20 top-1/2 -translate-y-1/2 space-y-4 z-10">
              <button
                className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm"
                onClick={() => {
                  containerRef.current?.scrollTo({
                    top:
                      (currentVideoIndex - 1) *
                      containerRef.current.clientHeight,
                    behavior: "smooth",
                  });
                }}
                disabled={currentVideoIndex === 0}
              >
                <ChevronUpIcon className="w-7 h-7" />
              </button>
              <button
                className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm"
                onClick={() => {
                  containerRef.current?.scrollTo({
                    top:
                      (currentVideoIndex + 1) *
                      containerRef.current.clientHeight,
                    behavior: "smooth",
                  });
                }}
                disabled={currentVideoIndex === videos.length - 1}
              >
                <ChevronDownIcon className="w-7 h-7" />
              </button>
            </div>
            <div className="absolute -right-20 bottom-2 z-10">
              <button
                className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm"
                onClick={toggleMute}
              >
                <Volume2Icon
                  className={`w-7 h-7 ${
                    isMuted ? "opacity-50" : "opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </main>
        <RightSideBar />
      </div>
    </div>
  );
}
