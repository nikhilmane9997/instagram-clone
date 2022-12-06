import { useSession } from "next-auth/react";
import React from "react";
import { useRecoilState } from "recoil";
import { moduleState } from "../../atoms/moduleAtom";

const Disclosure = () => {
  const [addPosts, setAddPost] = useRecoilState(moduleState);
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <div className=" flex flex-col w-full items-center justify-center">
          <span
            className="py-5 "
            onClick={() => {
              setAddPost(!addPosts);
            }}
          >
            <button className="boder-[1.5px] border-gray-300 h-10 w-28 rounded-xl cursor-pointer bg-gray-300 text-xl">
              Add Post
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default Disclosure;
