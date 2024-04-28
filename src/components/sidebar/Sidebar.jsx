import Conversations from "./Conversations";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-full h-full border-r-2 border-white max-w-96 border-opacity-10">
      <Searchbar />
      <Conversations />
    </div>
  );
};

export default Sidebar;
