import MessagesContainer from "../../components/messages/MessagesContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="self-center flex max-auto w-full h-full 2xl:max-h-[90%]  rounded-md  bg-blur-secondary">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
