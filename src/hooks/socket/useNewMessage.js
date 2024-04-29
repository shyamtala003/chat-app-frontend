import { useEffect } from "react";
import { socket } from "../../socket/socket";
import { useConversation } from "../../stores/useConversation";
import scrollDown from "../../utils/scrollDown";

const useNewMessage = () => {
  const { setMessage } = useConversation();

  useEffect(() => {
    const newMessageComes = (newMessage) => {
      setMessage(newMessage);
      return scrollDown("messageContainer");
    };

    // Listen for "typing" and "stopTyping" events
    socket.on("newMessage", newMessageComes);

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      socket.off("newMessage", newMessageComes);
    };
  }, []);
};

export default useNewMessage;
