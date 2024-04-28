import { useConversation } from "../../stores/useConversation";

const MessageHeader = () => {
  const { conversation: user } = useConversation();
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white border-opacity-15">
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src={user?.profilePicture} />
          </div>
        </div>
        <p className="text-white text-md">{user?.name}</p>
      </div>
    </div>
  );
};

export default MessageHeader;
