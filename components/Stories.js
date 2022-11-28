import React, { useEffect, useState } from "react";
import Story from "./Story";
import { fakeSuggestion } from "../utils/faker";
import { useSession } from "next-auth/react";

export const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    setSuggestions(fakeSuggestion);
  }, [fakeSuggestion]);

  return (
    <div
      className="flex p-6 space-x-2 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black 
    "
    >
      {session && (
        <Story imgs={session?.user?.image} username={session?.user?.name} />
      )}
      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.id}
            imgs={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
};
