import { memo } from "react";

const ConversationItem = ({ user }) => {
  return (
    <div className="flex items-center px-2 py-3 transition-all duration-200 ease-in-out border-b border-white cursor-pointer border-opacity-20 hover:backdrop-blur-xl hover:rounded-lg hover:border-transparent">
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="rounded-full w-11">
            <img src={user?.profilePicture} />
          </div>
        </div>
        <p className="text-white text-md">{user?.name}</p>
      </div>
    </div>
  );
};

export default memo(ConversationItem);
