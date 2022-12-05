import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CameraIcon } from "@heroicons/react/24/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../utils/firebase";
import { useSession } from "next-auth/react";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { moduleState } from "../atoms/moduleAtom";
import { ToastContainer, toast } from "react-toastify";
const Model = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(moduleState);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const captionRef = useRef(null);

  const addUploadPost = async () => {
    if (loading) return;
    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: session?.user?.name,
      caption: captionRef.current.value,
      profileImg: session?.user?.image,
      timestamp: serverTimestamp(),
    });
    console.log(docRef.id);

    const tostNotify = () => {
      toast.success("Post Uploaded");
    };

    const imageRef = ref(storage, `posts/${docRef.id}/images`);
    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      }
    );
    setOpen(false);
    setLoading(false);
    setSelectedFile(null);
    tostNotify();
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };
  return (
    <div className="flex white items-center justify-center ">
      <ToastContainer />
      {open && (
        <div
          className="rounded-lg px-4 pt-5 pb-4 text-left
            overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
        >
          <div>
            <div>
              {selectedFile ? (
                <img
                  src={selectedFile}
                  alt=""
                  onClick={() => setSelectedFile(null)}
                  className="w-full max-h-52 object-contain cursor-pointer"
                />
              ) : (
                <div
                  className=" mx-auto flex items-center justify-center h-12 w-12 bg-red-100 rounded-full cursor-pointer border object-contain border-gray-300 p-[1.5px]"
                  onClick={() => filePickerRef.current.click()}
                >
                  <CameraIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
              )}

              <div className="mt-3 text-center sm:mt-5">
                <p className="text-lg leading-9 font-medium text-gray-900">
                  Upload a photo
                </p>
                <div>
                  <input
                    type="file"
                    hidden
                    ref={filePickerRef}
                    onChange={addImageToPost}
                  />
                </div>
                <div className="mt-2">
                  <input
                    className="border-none focus:ring-0 w-full text-center"
                    type="text"
                    placeholder="please enter a caption"
                    ref={captionRef}
                  />
                </div>
                <div className="mt-4">
                  <button
                    disabled={!selectedFile}
                    onClick={addUploadPost}
                    class="group relative h-12 w-48 overflow-hidden rounded-lg bg-red-600 text-lg shadow"
                  >
                    <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative font-bold text-xl text-white group-hover:text-white">
                      {loading ? "Uploading..." : "Upload Post"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Model;
