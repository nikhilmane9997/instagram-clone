import React from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmile,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
const Post = (props) => {
  const { id, username, imgs, caption, postImg } = props;
  const { data: session } = useSession();
  // const userName = username.charAt(0).toUpperCase() + username.slice(1);
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-3">
        <img
          className="h-12 w-12 object-contain p-1 mr-3 border border-gray-200 rounded-full flex justify-center items-center"
          src={imgs}
          alt=""
        />
        <p className="flex-1 font-bold capitalize">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      <img src={postImg} alt="post imgage" className="w-full object-fill" />
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftIcon className="btn -rotate-90" />
            <PaperAirplaneIcon className="btn -rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="p-5 truncate">
        <span className="font-bold mr-1 capitalize">{username}</span>
        {caption}
      </p>
      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment"
          />
          <button className="font-semibold text-blue-500">Post</button>
        </form>
      )}
    </div>
  );
};

export default Post;
