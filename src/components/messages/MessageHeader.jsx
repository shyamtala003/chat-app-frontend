const MessageHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white border-opacity-15">
      <div className="flex items-center gap-2">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <p className="text-white text-md">John Doe</p>
      </div>
    </div>
  );
};

export default MessageHeader;
