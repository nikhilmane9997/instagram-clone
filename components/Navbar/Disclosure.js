import React from "react";
import { useRecoilState } from "recoil";
import { moduleState } from "../../atoms/moduleAtom";

const Disclosure = () => {
  const [addPosts, setAddPost] = useRecoilState(moduleState);

  return (
    <div className=" flex flex-col w-full">
      <span
        className="py-5 "
        onClick={() => {
          setAddPost(!addPosts);
        }}
      >
        Add Post
      </span>
    </div>
  );
};

export default Disclosure;
