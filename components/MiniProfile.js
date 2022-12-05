import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const MiniProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <span
        onClick={() => {
          router.push(`/${session?.user?.username}`);
        }}
        className="flex items-center justify-center cursor-pointer"
      >
        <img
          className="w-16 h-16 border rounded-full p-[2px]"
          src={session?.user?.image}
          alt=""
        />
        <div className="flex-1 mx-4">
          <h3 className="font-bold capitalize">{session?.user?.username}</h3>
          <h2 className="text-sm">{session?.user?.email}</h2>
        </div>
      </span>
    </div>
  );
};

export default MiniProfile;
