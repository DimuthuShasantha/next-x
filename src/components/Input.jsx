"use client";

import { useSession } from "next-auth/react";
import { HiOutlinePhotograph } from "react-icons/hi";

export default function Input() {
  const { data: session } = useSession();
  if (!session) return null;
  return (
    <div className="flex p-3 space-x-3 border-b border-gray-200">
      <img
        src={session.user.image}
        alt="user-img"
        className="rounded-full cursor-pointer h-11 w-11 hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <textarea className="w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700" placeholder="Whats happening" rows="2"></textarea>
        <div className="flex items-center justify-between p-2.5">
            <HiOutlinePhotograph className="w-10 h-10 p-2 rounded-full text-sky-500 hover:bg-sky-100 hover:cursor-pointer" />
            <button className="px-4 py-1.5 font-bold text-white bg-blue-400 rounded-full shadowa-medium hover:brightness-95 disabled:opacity-50">Post</button>
        </div>
      </div>
    </div>
  );
}
