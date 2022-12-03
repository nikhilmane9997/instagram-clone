import React, { useEffect, useState } from "react";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmile,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase";
import { useRecoilState, useSetRecoilState } from "recoil";
import { moduleComment } from "../atoms/moduleAtom";
import Moment from "react-moment";
const Post = (props) => {
  const { id, username, imgs, caption, postImg } = props;
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isliked, setIsliked] = useState(false);
  const sendComment = async (e) => {
    e.preventDefault();
    const sentComment = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comment"), {
      comment: sentComment,
      username: session?.user?.username,
      userImg: session?.user?.image,
      timeStamp: serverTimestamp(),
    });
  };
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "like"), (snapshot) => {
        setLikes(snapshot.docs);
      }),
    [db, id]
  );
  useEffect(() => {
    setIsliked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  const addLikes = async () => {
    if (isliked) {
      await deleteDoc(doc(db, "posts", id, "like", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "like", session?.user?.uid), {
        username: session?.user?.username,
      });
    }
  };
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comment"),
          orderBy("timeStamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );
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
      <img src={postImg} alt="post imgage" className="w-full  object-fill" />
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {isliked ? (
              <HeartIconFilled
                className="btn text-red-600"
                onClick={addLikes}
              />
            ) : (
              <HeartIcon className="btn" onClick={addLikes} />
            )}

            <ChatBubbleOvalLeftIcon className="btn -rotate-90" />
            <PaperAirplaneIcon className="btn -rotate-45" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      <div className="flex flex-col p-5">
        <p className=" truncate">
          {likes.length > 0 && (
            <p className="font-bold mb-1">{likes.length}likes</p>
          )}
        </p>
        <div className="space-x-2">
          <span className="font-bold ml-1">{username}</span>
          <span className="">{caption}</span>
        </div>
      </div>

      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment, id) => {
            return (
              <div key={id} className="flex items-center space-x-2 mb-3">
                <img
                  className="h-7 rounded-full"
                  src={comment.data().userImg}
                  alt=""
                />
                <p className="text-sm flex-1 space-x-2 capitalize">
                  <span className="font-bold">{comment.data().username}</span>
                  <span>{comment.data().comment}</span>
                </p>
                <Moment fromNow className="pr-5 text-sm capitalize">
                  {comment.data().timeStamp?.toDate()}
                </Moment>
              </div>
            );
          })}
        </div>
      )}

      {session && (
        <form className="flex items-center p-4">
          <FaceSmileIcon className="h-7" />
          <input
            type="text"
            className="border-none flex-1 focus:ring-0 outline-none"
            placeholder="Add a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-500"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
