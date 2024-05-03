import { useEffect } from "react";
import { socket } from "../../socket/socket";
import { useConversation } from "../../stores/useConversation";

const useAllMessageReaded = () => {
  const { conversation, setAllMessagesRead, setUnreadMessageCount } =
    useConversation();

  useEffect(() => {
    function allMessageReaded(data) {
      // this function update the side user list un-read msg count
      setUnreadMessageCount(data?.toChatUserId, 0);

      // below code update current opened conversation message's read status
      if (conversation?._id === data?.toChatUserId) {
        setAllMessagesRead();
      }
    }

    // Listen for the 'allMessageReaded' event
    socket.on("allMessageReaded", allMessageReaded);

    // Clean up function to disconnect the socket when the component unmounts
    return () => {
      socket.off("allMessageReaded");
    };
  }, [conversation]);
};

export default useAllMessageReaded;
