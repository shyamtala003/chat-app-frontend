const ConversationsSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="skeleton bg-skeleton w-full h-16 bg-transparent backdrop-blur-0"></div>
      <div className="skeleton bg-skeleton w-full h-16 bg-transparent backdrop-blur-0"></div>
      <div className="skeleton bg-skeleton w-full h-16 bg-transparent backdrop-blur-0"></div>
      <div className="skeleton bg-skeleton w-full h-16 bg-transparent backdrop-blur-0"></div>
    </div>
  );
};

export default ConversationsSkeleton;
