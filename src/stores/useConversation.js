import { create } from "zustand";

export const useConversation = create((set) => ({
  conversation: null,
  messages: [],
  onlineUsers: [],

  //   1. select selected conversation
  setSelectedConversation(conversation) {
    set(() => ({
      conversation,
    }));
  },

  //  2. set  message array
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
}));
