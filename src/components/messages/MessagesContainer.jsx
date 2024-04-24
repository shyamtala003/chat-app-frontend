import MessageHeader from "./MessageHeader";
import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
import DefaultView from "./DefaultView";

const MessagesContainer = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <MessageHeader />
      <MessageContainer />
      <SendMessageForm />
      {/* <DefaultView /> */}
    </div>
  );
};

export default MessagesContainer;
