import { create } from "zustand";

export const useConversation = create((set) => ({
  conversation: null, //inside this varible we store the selected conversation's user details
  messages: [],
  onlineUsers: [],
  sidebarUserList: [],

  //   1. set selected conversation user details
  setSelectedConversation(conversation) {
    set(() => ({
      conversation,
    }));
  },

  //  2. set selected conversation's  message array
  setMessages(messages) {
    set(() => ({ messages }));
  },

  // 3. add new message
  setMessage(message) {
    set((state) => ({ messages: [...state.messages, message] }));
  },

  // 4.reset message array
  setCleanMessage() {
    set(() => ({ messages: [] }));
  },

  // 5.set online user
  setOnlineUser(onlineUsers) {
    set(() => ({ onlineUsers }));
  },

  // 6.set sidebar user list
  setSidebarUserList(users = []) {
    set(() => ({ sidebarUserList: users }));
  },

  // 7.Function to update last message and move user to top
  updateUserLastMessageAndMoveToTop(userId, lastMessage) {
    set((state) => {
      const updatedUserList = [...state.sidebarUserList];
      const index = updatedUserList.findIndex((user) => user._id === userId);
      if (index !== -1) {
        // Update last message
        updatedUserList[index].lastMessage = lastMessage;
        // Move user to the top
        const [user] = updatedUserList.splice(index, 1);
        updatedUserList.unshift(user);
      }
      return { sidebarUserList: updatedUserList };
    });
  },
}));
