import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useAuth } from "../../stores/useAuth";
import { useConversation } from "../../stores/useConversation";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

dayjs.extend(relativeTime);

const MessageElement = ({ message }) => {
  const { userId, profilePicture } = useAuth();
  const { conversation, onlineUsers } = useConversation();
  let isOnline =
    userId === message.receiverId && onlineUsers.includes(message.senderId);

  const formattedTime = dayjs(message.createdAt).fromNow();
  const self = userId === message.senderId;
  return (
    <div
      className={`chat ${self ? "chat-end" : "chat-start"} ${message?.shake && "animate-shake"}`}>
      <div className={`chat-image avatar ${isOnline && "online"} z-0`}>
        <div className="w-8 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={self ? profilePicture : conversation.profilePicture}
          />
        </div>
      </div>
      <div
        className={`chat-bubble text-white text-opacity-70 ${self ? "bg-gray-900" : "bg-gray-800"} `}>
        {message.message}
        <time className="flex justify-end items-center gap-1 text-xs  ">
          <span className="opacity-50">{formattedTime}</span>
          {self && (
            <IoCheckmarkDoneSharp
              className={`text-base ${message?.read ? "text-green-300" : "text-gray-400"}`}
            />
          )}
        </time>
      </div>
    </div>
  );
};

export default MessageElement;
