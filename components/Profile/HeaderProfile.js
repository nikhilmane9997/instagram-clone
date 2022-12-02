import { useSession } from "next-auth/react";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={session?.user?.image}
          alt=""
          className="w-32 h-32 rounded-full"
        />
        <p>{session?.user?.name}</p>
      </div>
    </div>
  );
};

export default Header;
