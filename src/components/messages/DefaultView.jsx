import { TiMessages } from "react-icons/ti";

const DefaultView = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p className="text-2xl leading-8 text-center text-white">
        Welcome 👋🏻 Shyam Tala 🌴 <br />
        Select chat to start messaging
        <br />
        <center>
          <TiMessages fontSize={"36px"} className="mt-3" />
        </center>
      </p>
    </div>
  );
};

export default DefaultView;
