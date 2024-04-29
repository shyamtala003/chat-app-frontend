import { useParams } from "react-router-dom";
import Conversations from "./Conversations";
import Searchbar from "./Searchbar";

const Sidebar = () => {
  const param = useParams();
  return (
    <div
      className={`${param.id ? "hidden" : "flex"} sm:flex  flex-col w-full h-full border-r-2 border-white sm:max-w-96 border-opacity-10`}>
      <Searchbar />
      <Conversations />
    </div>
  );
};

export default Sidebar;
