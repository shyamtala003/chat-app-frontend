import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useConversation } from "../../stores/useConversation";
import useApiCall from "../../hooks/useApiCall";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import scrollDown from "../../utils/scrollDown";
import { socket } from "../../socket/socket";
import { useAuth } from "../../stores/useAuth";

const schema = yup.object().shape({
  message: yup.string().required("Message is required"),
});

const SendMessageForm = () => {
  const { conversation, setMessage } = useConversation();
  const { userId } = useAuth();
  const { apiCall, loading } = useApiCall();
  const [isTyping, setIsTyping] = useState(false);

  // use form hook for form management
  const { handleSubmit, register, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      message: "",
    },
  });

  async function sendMessage(data) {
    let response = await apiCall(
      "post",
      `/api/v1/send-message/${conversation._id}`,
      {
        body: data,
      }
    );
    setMessage(response.data.message);
    scrollDown("messageContainer");
    return reset();
  }

  useEffect(() => {
    let typingTimeout;

    const handleKeyDown = () => {
      setIsTyping(true);
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 1000); // 1 second timeout
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(typingTimeout);
    };
  }, [userId]);

  useEffect(() => {
    if (isTyping) {
      socket.emit("typing", {
        senderId: userId,
        receiverId: conversation._id,
      });
    } else {
      socket.emit("stopTyping", {
        senderId: userId,
        receiverId: conversation._id,
      });
    }
  }, [isTyping, userId, conversation._id]);

  return (
    <div className="sticky w-full bottom-1">
      <form
        className="flex items-center w-full px-4 py-3"
        onSubmit={handleSubmit(sendMessage)}
        onKeyDown={() => setIsTyping(true)}>
        {" "}
        {/* Listen for keydown event */}
        <input
          type="text"
          name="message"
          placeholder="Type here"
          className="w-full border-t border-none rounded-r-none input input-bordered"
          {...register("message")}
        />
        <button
          className="border-none rounded-l-none btn btn-square disabled:bg-opacity-95 disabled:cursor-no-drop"
          disabled={loading || !formState.isValid}>
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsFillSendFill />
          )}
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
