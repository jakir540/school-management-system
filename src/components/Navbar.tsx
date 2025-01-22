import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-sm rounded-full border border-gray-300 px-3 py-1 w-[250px] focus-within:ring-2 focus-within:ring-purple-500">
        <Image src="/search.png" alt="Search Icon" width={16} height={16} />
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-8">
        {/* Message Icon */}
        <div className="relative bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:shadow-md transition">
          <Image src="/message.png" alt="Messages" width={20} height={20} />
        </div>

        {/* Announcement Icon */}
        <div className="relative bg-gray-100 rounded-full w-9 h-9 flex items-center justify-center cursor-pointer hover:shadow-md transition">
          <Image
            src="/announcement.png"
            alt="Announcements"
            width={20}
            height={20}
          />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs font-semibold">
            1
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col text-right">
            <span className="text-sm font-medium text-gray-800">John Doe</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full border border-gray-300 hover:shadow-md transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
