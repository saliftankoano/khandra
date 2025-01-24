import { HeartIcon } from "lucide-react";

import { MessageSquareIcon, BookmarkIcon, ShareIcon } from "lucide-react";
import Image from "next/image";

export default function RightSideBar() {
  return (
    <aside
      id="right-sidebar"
      className="w-[400px] h-full border-l border-neutral-800 bg-black overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src="/avatar.svg"
            className="w-12 h-12 rounded-full"
            alt="creator"
            width={48}
            height={48}
          />
          <div className="flex-1">
            <div className="font-semibold text-white">@creator</div>
            <div className="text-sm text-neutral-400">2.5M followers</div>
          </div>
          <button className="px-6 py-2 rounded-full bg-neutral-500 hover:bg-neutral-600 text-white">
            Follow
          </button>
        </div>
        <div className="mb-6">
          <p className="text-white mb-2">
            Amazing dance moves! 🎵 #dance #viral
          </p>
          <div className="text-sm text-neutral-400">Posted 2 hours ago</div>
        </div>
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-800">
          <button className="flex items-center gap-2 text-white hover:text-neutral-500">
            <HeartIcon className="w-6 h-6" />
            <span>24.5K</span>
          </button>
          <button className="flex items-center gap-2 text-white hover:text-neutral-500">
            <MessageSquareIcon className="w-6 h-6" />
            <span>1.2K</span>
          </button>
          <button className="flex items-center gap-2 text-white hover:text-neutral-500">
            <BookmarkIcon className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-2 text-white hover:text-neutral-500">
            <ShareIcon className="w-6 h-6" />
          </button>
        </div>
        <div id="comments" className="space-y-6">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/avatar.svg"
              className="w-8 h-8 rounded-full"
              alt="user"
              width={32}
              height={32}
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-neutral-900 rounded-full px-4 py-2 text-white border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="space-y-4">
            <div className="flex gap-3">
              <Image
                src="/avatar.svg"
                className="w-8 h-8 rounded-full"
                alt="user"
                width={32}
                height={32}
              />
              <div>
                <div className="text-white">
                  <span className="font-semibold">@user1</span> Amazing video!
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-neutral-400">
                  <span>2h ago</span>
                  <button className="hover:text-white">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
