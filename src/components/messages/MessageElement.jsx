import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useAuth } from "../../stores/useAuth";
dayjs.extend(relativeTime);

const MessageElement = ({ message }) => {
  const { userId } = useAuth();
  console.log(message);

  const formattedTime = dayjs(message.createdAt).fromNow();
  return (
    <div
      className={`chat ${userId === message.senderId ? "chat-end" : "chat-start"}`}>
      <div className="chat-bubble">
        {message.message}
        <time className="block text-xs text-right opacity-50">
          {formattedTime}
        </time>
      </div>
    </div>
  );
};

export default MessageElement;
