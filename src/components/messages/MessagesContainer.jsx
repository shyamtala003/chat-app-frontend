import MessageHeader from "./MessageHeader";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import DefaultView from "./DefaultView";
import { useConversation } from "../../stores/useConversation";
import useNewMessage from "../../hooks/socket/useNewMessage";
import { useParams } from "react-router-dom";

const MessagesContainer = () => {
  const { conversation } = useConversation();
  const param = useParams();
  useNewMessage();
  return (
    <div
      className={`${!param.id ? "hidden" : "flex"} sm:flex  flex-col w-full h-full min-h-screen`}>
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
