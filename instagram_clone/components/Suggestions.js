import React, { useEffect, useState } from "react";
import { fakeSuggestion } from "../utils/faker";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fakeSuggestionList = fakeSuggestion.slice(0, 5);
    setSuggestions(fakeSuggestionList);
  }, [fakeSuggestion]);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="font-bold text-gray-400">Suggestion for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((profile) => {
        return (
          <div
            key={profile.id}
            className="flex justify-between items-center mt-3"
          >
            <img
              src={profile.avatar}
              className="w-10 h-10 rounded-full border border-gray-300"
              alt=""
            />
            <div className="flex-1 ml-4">
              <h2 className="text-sm font-bold">{profile.username}</h2>
              <h3 className="text-xs text-gray-400">
                Works at{profile.companyName}
              </h3>
            </div>
            <button className="text-blue-500 text-sm cursor-pointer">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
