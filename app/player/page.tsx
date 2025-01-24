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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > 50;
    const isSwipeDown = distance < -50;

    if (isSwipeUp && currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    }
    if (isSwipeDown && currentVideoIndex > 0) {
      setCurrentVideoIndex((prev) => prev - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex((prev) => prev + 1);
    }
  };

  const handlePrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  return (
    <div id="root" className="h-screen bg-black">
      <div className="flex h-full">
        <LeftSideBar />
        <main
          id="main-content"
          className="ml-[240px] flex-1 h-full flex justify-center bg-black"
        >
          <div className="relative h-full w-[calc(100vh*0.7)] max-w-[500px]">
            <div className="h-full w-full">
              <div
                className="relative w-full h-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex flex-col absolute -right-20 top-1/2 -translate-y-1/2 space-y-4 z-10">
                  <button
                    className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm"
                    onClick={handlePrevVideo}
                    disabled={currentVideoIndex === 0}
                  >
                    <ChevronUpIcon className="w-7 h-7" />
                  </button>
                  <button
                    className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm"
                    onClick={handleNextVideo}
                    disabled={currentVideoIndex === videos.length - 1}
                  >
                    <ChevronDownIcon className="w-7 h-7" />
                  </button>
                </div>
                <div className="absolute -right-20 bottom-2 z-10">
                  <button className="p-4 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700 backdrop-blur-sm">
                    <Volume2Icon className="w-7 h-7" />
                  </button>
                </div>
                <div className="w-full h-full">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    controls
                    playsInline
                    loop
                  >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </main>
        <RightSideBar />
      </div>
    </div>
  );
}
