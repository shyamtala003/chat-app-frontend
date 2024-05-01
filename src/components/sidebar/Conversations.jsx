import { useCallback, useEffect, useState } from "react";
import useApiCall from "../../hooks/useApiCall";
import ConversationItem from "./ConversationItem";
import ConversationsSkeleton from "./skeleton/ConversationsSkeleton";

const Conversations = () => {
  const { loading, apiCall } = useApiCall();
  const [conversations, setConversations] = useState();

  // fetch all convesasions
  const fetchConversation = useCallback(async () => {
    let response = await apiCall("get", "/api/v1/users");
    return setConversations(response.data.users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchConversation();
  }, [fetchConversation]);

  return (
    <div className="flex flex-col h-full px-1 mt-4 overflow-y-auto">
      {loading && <ConversationsSkeleton />}
      {!loading &&
        conversations?.length > 0 &&
        conversations.map((user) => (
          <ConversationItem key={user._id} user={user} />
        ))}
    </div>
  );
};

export default Conversations;
