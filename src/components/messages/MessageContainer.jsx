import { useEffect } from "react";
import useApiCall from "../../hooks/useApiCall";
import { useConversation } from "../../stores/useConversation";
import MessageElement from "./MessageElement";
import MessageSkeleton from "./skeleton/MessageSkeleton";
import scrollDown from "../../../utils/scrollDown";

const MessageContainer = () => {
  const { messages, setMessages, conversation, setCleanMessage } =
    useConversation();
  const { loading, apiCall } = useApiCall();

  useEffect(() => {
    async function fetchConversation() {
      // clean previous selected conversation
      setCleanMessage();

      let messages = await apiCall(
        "get",
        `/api/v1/get-message/${conversation._id}`
      );
      setMessages(messages.data.messages);
      return scrollDown("messageContainer");
    }

    fetchConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversation._id]);
  return (
    <div
      id="messageContainer"
      className="flex flex-col w-full h-full px-4 pt-2 overflow-y-auto">
      {loading && (
        <>
          <MessageSkeleton />
        </>
      )}

      {!loading &&
        messages &&
        messages.map((message) => (
          <MessageElement key={message._id} message={message} />
        ))}
    </div>
  );
};

export default MessageContainer;
