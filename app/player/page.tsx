import { ChevronDownIcon, ChevronUpIcon, Volume2Icon } from "lucide-react";
import LeftSideBar from "../Components/LeftSideBar";
import RightSideBar from "../Components/RightSideBar";

export default function Player() {
  return (
    <div id="root" className="h-screen bg-black">
      <div className="flex h-full">
        <LeftSideBar />
        <main
          id="main-content"
          className="ml-[240px] w-[calc(100%-540px)] h-full"
        >
          <div className="relative h-full">
            <div className="bg-neutral-900 h-full flex items-center justify-center text-white">
              <div className="relative w-full h-full">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-4 z-10">
                  <button className="p-3 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700">
                    <ChevronUpIcon className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700">
                    <ChevronDownIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="absolute right-4 bottom-20 z-10">
                  <button className="p-3 bg-neutral-800/50 rounded-full text-white hover:bg-neutral-700">
                    <Volume2Icon className="w-6 h-6" />
                  </button>
                </div>
                <div className="w-full h-full flex items-center justify-center">
                  Video Player
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
