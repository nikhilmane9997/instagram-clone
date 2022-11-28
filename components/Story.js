import React from "react";

const Story = (props) => {
  const { imgs, username } = props;
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full border-2 border-red-500 p-[1.5px] object-contain cursor-pointer hover:scale-110 transform transition ease-out"
        src={imgs}
        alt="profile avatar"
      />
      <p className="w-14 truncate text-xs text-center">{username}</p>
    </div>
  );
};

export default Story;
