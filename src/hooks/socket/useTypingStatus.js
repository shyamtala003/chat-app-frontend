import { useEffect, useState } from "react";
import { socket } from "../../socket/socket";

const useTypingStatus = (userId) => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleTyping = ({ senderId }) => {
      if (senderId === userId) {
        setIsTyping(true);
      }
    };

    const handleStopTyping = ({ senderId }) => {
      if (senderId === userId) {
        setIsTyping(false);
      }
    };

    // Listen for "typing" and "stopTyping" events
    socket.on("typing", handleTyping);
    socket.on("stopTyping", handleStopTyping);

    // Cleanup: Remove event listeners when component unmounts
    return () => {
      socket.off("typing", handleTyping);
      socket.off("stopTyping", handleStopTyping);
    };
  }, [userId]);

  return isTyping;
};

export default useTypingStatus;
