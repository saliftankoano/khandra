import Image from "next/image";

export default function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 w-full bg-black border-b border-neutral-800 z-50"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-2xl font-bold text-neutral-500">Khandra</div>
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg bg-neutral-900 text-white border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            <i className="fa-solid fa-search absolute right-3 top-3 text-neutral-500"></i>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-neutral-800 rounded-full text-white">
            <i className="fa-regular fa-bell text-xl"></i>
          </button>
          <Image
            src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=123"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
}
