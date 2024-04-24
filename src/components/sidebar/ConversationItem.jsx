const ConversationItem = () => {
  return (
    <div className="flex items-center px-2 py-3 transition-all duration-200 ease-in-out border-b border-white cursor-pointer border-opacity-20 hover:backdrop-blur-xl hover:rounded-lg hover:border-transparent">
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="rounded-full w-11">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <p className="text-white text-md">John Doe</p>
      </div>
    </div>
  );
};

export default ConversationItem;
