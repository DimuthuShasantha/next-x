import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-3 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link
        href="/"
        className="flex items-center p-3 hover:bg-gray-100 rounded-full transistion-all gap-2 w-fit duration-200"
      >
        <HiHome className="w-7 h-7" />
        <span className="hidden font-bold xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 text-white rounded-full hover:brightness-95 shadow-md transistion-all duration-200 w-48 h-9">
        Sign In
      </button>
    </div>
  );
}
