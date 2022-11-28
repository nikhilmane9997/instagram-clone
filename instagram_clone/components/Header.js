import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon as SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { moduleState } from "../atoms/moduleAtom";
const Header = () => {
  const { data: session } = useSession();

  const router = useRouter();
  const [open, setOpen] = useRecoilState(moduleState);
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        <div
          className="relative w-24 hidden lg:inline-grid cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
            alt="ista-logo"
          />
        </div>
        <div
          className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://i.pinimg.com/736x/95/73/1a/95731a2d0ab3c1851ed7b5328d068b1f.jpg"
            layout="fill"
            objectFit="contain"
            alt="ista-logo"
          />
        </div>
        {/* middlesection */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5" />
            </div>
            <input
              className="bg-gray-50 w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex space-x-4 justify-end items-center">
          <HomeIcon className="NavBtn" onClick={() => router.push("/")} />
          <Bars3Icon className="h-6 md:hidden " />
          {session ? (
            <>
              <div className="relative NavBtn">
                <PaperAirplaneIcon className="NavBtn -rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 flex justify-center items-center rounded-full animate-pulse text-white">
                  6
                </div>
              </div>
              <PlusCircleIcon
                className="NavBtn"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="NavBtn" />
              <HeartIcon className="NavBtn" />
              <img
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={session?.user?.image}
                alt=""
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
