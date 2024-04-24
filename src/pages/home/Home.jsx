import MessagesContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="self-center flex max-auto w-full h-full lg:max-h-[90%] backdrop-blur-xl rounded-md bg-white bg-opacity-5">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
