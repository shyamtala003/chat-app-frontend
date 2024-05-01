import { memo, useEffect } from "react";
import { useConversation } from "../../stores/useConversation";
import useTypingStatus from "../../hooks/socket/useTypingStatus";
import { Navigate, useNavigate, useParams } from "react-router-dom";

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
      className="flex items-center px-2 py-3 transition-all duration-200 ease-in-out border-b border-white cursor-pointer border-opacity-20 hover:backdrop-blur-xl hover:rounded-lg hover:border-transparent">
      <div className="flex items-center gap-2">
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
            <p className="p-0 text-[12px] font-medium  text-gray  collapse-content">
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
    </div>
  );
});

export default ConversationItem;
