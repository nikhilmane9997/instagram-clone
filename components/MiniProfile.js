import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  console.log(session.user.image);
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="w-16 h-16 border rounded-full p-[2px]"
        src={session?.user?.image}
        alt=""
      />
      <div className="flex-1 mx-4">
        <h3 className="font-bold capitalize">{session?.user?.username}</h3>
        <h2 className="text-sm">{session?.user?.email}</h2>
      </div>
      <button
        onClick={signOut}
        className="text-blue-500 font-semibold cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
