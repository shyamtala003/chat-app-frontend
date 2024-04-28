const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="chat chat-start">
        <div className="skeleton  bg-skeleton bg-transparent min-w-40 w-[20%] h-20 backdrop-blur-0 chat-bubble"></div>
      </div>
      <div className="chat chat-start">
        <div className="skeleton  bg-skeleton bg-transparent min-w-40 w-[30%] h-24 backdrop-blur-0 chat-bubble"></div>
      </div>
      <div className="chat chat-end">
        <div className="skeleton  bg-skeleton bg-transparent min-w-40 w-[20%] h-20 backdrop-blur-0 chat-bubble"></div>
      </div>
      <div className="chat chat-start">
        <div className="skeleton  bg-skeleton bg-transparent min-w-40 w-[20%] h-20 backdrop-blur-0 chat-bubble"></div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
