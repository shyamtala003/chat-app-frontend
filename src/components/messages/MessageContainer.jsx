import MessageElement from "./MessageElement";

const MessageContainer = () => {
  return (
    <div className="flex flex-col w-full h-full px-4 pt-2 overflow-y-auto">
      <MessageElement />
      <MessageElement />
    </div>
  );
};

export default MessageContainer;
