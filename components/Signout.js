import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const SignOut = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center md:justify-end p-4">
      <button
        onClick={() => {
          signOut({
            callbackUrl: "/auth/signin",
          });
        }}
        className="text-white bg-red-500 px-4 py-2 rounded-lg"
      >
        Signout
      </button>
    </div>
  );
};

export default SignOut;
