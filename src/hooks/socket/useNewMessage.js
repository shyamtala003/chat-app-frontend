import { useEffect } from "react";
import { socket } from "../../socket/socket";
import { useConversation } from "../../stores/useConversation";
import scrollDown from "../../utils/scrollDown";
import incomingAudio from "../../assets/audio/incoming.mp3";

const useNewMessage = () => {
  const {
    setMessage,
    conversation,
    sidebarUserList,
    updateUserLastMessageAndMoveToTop,
  } = useConversation();
  const notificationSound = new Audio(incomingAudio);
  useEffect(() => {
    const newMessageComes = (newMessage) => {
      if (conversation?._id === newMessage.senderId) {
        // condition execute when current user have already opened conversation with new message's sender
        updateUserLastMessageAndMoveToTop(
          newMessage?.senderId,
          newMessage?.message,
          false
        );

        newMessage = { ...newMessage, shake: true };
        setMessage(newMessage);
        notificationSound.play();
        return scrollDown();
      } else {
        // condition execute when current user have not open conversation with new message's sender
        updateUserLastMessageAndMoveToTop(
          newMessage?.senderId,
          newMessage?.message
        );
      }
    };

    // Listen for "typing" and "stopTyping" events
    socket.on("newMessage", newMessageComes);

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      socket.off("newMessage", newMessageComes);
    };
  }, [conversation, sidebarUserList]);
};

export default useNewMessage;
