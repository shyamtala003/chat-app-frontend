import { TiMessages } from "react-icons/ti";
import { useAuth } from "../../stores/useAuth";

const DefaultView = () => {
  const { name } = useAuth();
  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full h-full">
      <p className="text-2xl leading-8 text-center text-white">
        Welcome 👋🏻 {name} 🌴 <br />
        Select chat to start messaging
      </p>
      <TiMessages className="text-5xl text-white" />
    </div>
  );
};

export default DefaultView;
