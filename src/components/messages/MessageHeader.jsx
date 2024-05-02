import useTypingStatus from "../../hooks/socket/useTypingStatus";
import { useConversation } from "../../stores/useConversation";

const MessageHeader = () => {
  const { conversation: user, onlineUsers } = useConversation();
  let isOnline = onlineUsers.includes(user._id);
  const isTyping = useTypingStatus(user._id);

  return (
    <div className="flex items-center justify-between px-4 py-3 sticky top-0 z-10  bg-black bg-opacity-80 backdrop-blur-md border-b border-white border-opacity-15">
      <div className="flex items-center gap-2">
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-10 rounded-full">
            <img src={user?.profilePicture} />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <p className="text-white text-md capitalize">{user?.name}</p>

          {/* code for typing status */}
          <div
            className={`collapse ${
              isTyping ? "collapse-open" : "collapse-close"
            }`}>
            <p className="p-0 text-sm font-semibold text-green-400 collapse-content">
              typing...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
