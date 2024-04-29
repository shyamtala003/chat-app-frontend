import MessageHeader from "./MessageHeader";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import DefaultView from "./DefaultView";
import { useConversation } from "../../stores/useConversation";
import useNewMessage from "../../hooks/socket/useNewMessage";

const MessagesContainer = () => {
  const { conversation } = useConversation();
  useNewMessage();
  return (
    <div className="flex flex-col w-full h-full ">
      {!conversation && <DefaultView />}

      {conversation && (
        <>
          <MessageHeader />
          <MessageContainer />
          <SendMessageForm />
        </>
      )}
    </div>
  );
};

export default MessagesContainer;
