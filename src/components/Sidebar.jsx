"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-3 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 p-3 transition-all duration-200 rounded-full cursor-pointer hover:bg-gray-100" />
      </Link>
      <Link
        href="/"
        className="flex items-center gap-2 p-3 duration-200 rounded-full hover:bg-gray-100 transistion-all w-fit"
      >
        <HiHome className="w-7 h-7" />
        <span className="hidden font-bold xl:inline">Home</span>
      </Link>
      {session ? (
        <button
          className="w-48 font-semibold text-white duration-200 bg-blue-400 rounded-full shadow-md hover:brightness-95 transistion-all h-9"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="w-48 font-semibold text-white duration-200 bg-blue-400 rounded-full shadow-md hover:brightness-95 transistion-all h-9"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  );
}
