import { BsFillSendFill } from "react-icons/bs";

const SendMessageForm = () => {
  return (
    <form className="flex items-center w-full px-4 py-3">
      <input
        type="text"
        placeholder="Type here"
        className="w-full border-t border-none rounded-r-none input input-bordered"
      />
      <button className="border-none rounded-l-none btn btn-square">
        <BsFillSendFill />
      </button>
    </form>
  );
};

export default SendMessageForm;
