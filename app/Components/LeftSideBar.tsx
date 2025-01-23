import { HouseIcon, UsersIcon, CompassIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

export default function LeftSideBar() {
  return (
    <nav
      id="left-sidebar"
      className="fixed w-[240px] h-[calc(100vh-4rem)] bg-black border-r border-neutral-800 pt-4"
    >
      <div className="px-2 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg"
        >
          <HouseIcon className="w-6 h-6" />
          <span>For You</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg"
        >
          <UsersIcon className="w-6 h-6" />
          <span>Following</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg"
        >
          <CompassIcon className="w-6 h-6" />
          <span>Explore</span>
        </a>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg">
          <PlusIcon className="w-6 h-6" />
          <span>Upload</span>
        </button>
      </div>
      <div className="absolute bottom-0 w-full px-2 pb-4">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-neutral-800 rounded-lg"
        >
          <Image
            src="/avatar.svg"
            alt="creator"
            width={48}
            height={48}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <div className="font-semibold">@username</div>
            <div className="text-sm text-neutral-400">View Profile</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
