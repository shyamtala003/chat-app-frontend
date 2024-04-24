// eslint-disable-next-line react/prop-types
const Conversations = ({ children }) => {
  return (
    <div className="flex flex-col h-full px-1 mt-4 overflow-y-auto">
      {children}
    </div>
  );
};

export default Conversations;
