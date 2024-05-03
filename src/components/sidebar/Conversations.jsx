import { useCallback, useEffect, useState } from "react";
import useApiCall from "../../hooks/useApiCall";
import ConversationItem from "./ConversationItem";
import ConversationsSkeleton from "./skeleton/ConversationsSkeleton";
import { useConversation } from "../../stores/useConversation";

const Conversations = () => {
  const { loading, apiCall } = useApiCall();
  const { sidebarUserList, setSidebarUserList } = useConversation();

  // fetch all conversation
  const fetchConversation = useCallback(async () => {
    let response = await apiCall("get", "/api/v1/users");
    return setSidebarUserList(response.data.users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchConversation();
  }, [fetchConversation]);

  return (
    <div className="flex flex-col h-full px-1 mt-4 overflow-y-auto">
      {loading && <ConversationsSkeleton />}
      {!loading &&
        sidebarUserList?.length > 0 &&
        sidebarUserList.map((user) => (
          <ConversationItem key={user._id} user={user} />
        ))}
    </div>
  );
};

export default Conversations;
