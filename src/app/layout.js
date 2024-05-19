import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "X Clone application using next14 and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="sticky top-0 hidden h-screen border-r sm:inline">
              <Sidebar />
            </div>
            <div className="flex-1 w-2xl">{children}</div>
            <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
              <div className="sticky top-0 py-2 bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-3xl"
                ></input>
              </div>
              <News />
            </div>
          </div>
        </body>
      </html>
    </SessionWrapper>
  );
}
