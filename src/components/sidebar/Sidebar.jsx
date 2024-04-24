import ConversationItem from "./ConversationItem";
import Conversations from "./Conversations";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full h-full border-r-2 border-white max-w-80 border-opacity-10">
      <Searchbar />
      <Conversations>
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
        <ConversationItem />
      </Conversations>
    </div>
  );
};

export default Sidebar;
