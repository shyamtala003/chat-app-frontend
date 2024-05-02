import { memo, useEffect } from "react";
import { useConversation } from "../../stores/useConversation";
import useTypingStatus from "../../hooks/socket/useTypingStatus";
import { useNavigate, useParams } from "react-router-dom";

const ConversationItem = memo(function ConversationItem({ user }) {
  const navigate = useNavigate();
  const { setSelectedConversation, conversation, onlineUsers } =
    useConversation();
  let isOnline = onlineUsers.includes(user._id);
  const isTyping = useTypingStatus(user._id);
  function setConversation() {
    if (conversation === null || conversation?.id !== user._id)
      return navigate(`/chat/${user._id}`);
  }

  const param = useParams();

  useEffect(() => {
    if (conversation === null || conversation?.id !== user._id)
      user._id === param.id && setSelectedConversation(user);

    if (!param.id) setSelectedConversation(null);
  }, [param.id]);

  return (
    <div
      onClick={setConversation}
      className="w-full flex items-center px-2 py-3 transition-all duration-200 ease-in-out border-b border-white cursor-pointer border-opacity-20 hover:backdrop-blur-xl hover:rounded-lg hover:border-transparent">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <div className={`avatar ${isOnline && "online"}`}>
            <div className="rounded-full w-11">
              <img src={user?.profilePicture} />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-white text-md capitalize">{user?.name}</p>

            {/* code for display last message */}
            <div
              className={`collapse ${
                !isTyping ? "collapse-open" : "collapse-close"
              }`}>
              <p
                className={`p-0 text-[12px] ${user?.unreadMessageCount > 0 ? "text-white" : "text-gray "} font-medium   collapse-content overflow-hidden text-ellipsis whitespace-nowrap`}>
                {user.lastMessage}
              </p>
            </div>

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
        {/*  unread message count */}
        {user?.unreadMessageCount > 0 && (
          <span className="bg-blur-dark p-1 w-8 h-8 grid place-items-center rounded-full text-[10px] font-bold text-white">
            {user?.unreadMessageCount}
          </span>
        )}
      </div>
    </div>
  );
});

export default ConversationItem;
