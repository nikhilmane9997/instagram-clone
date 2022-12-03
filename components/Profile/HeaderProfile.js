import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row justify-evenly px-5">
        <div className="flex items-center gap-4">
          <img
            src={session?.user?.image}
            alt=""
            className="rounded-full w-28"
          />
          <div className="flex flex-col relative bottom-3 gap-2">
            <p className="text-xl">{session?.user?.name}</p>
            <div className="flex gap-3 items-center">
              <p> 2 posts</p>
              <p> 316 followers</p>
              <p> 296 following</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 ml-28 md:ml-0 pl-2 md:pl-0">
          <button className="button"> Edit Profile</button>
          <Cog6ToothIcon
            className="w-7 cursor-pointer"
            onClick={() => {
              router.push("/settings");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
