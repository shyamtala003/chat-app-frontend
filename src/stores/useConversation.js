import { create } from "zustand";

export const useConversation = create((set) => ({
  conversation: null,
  messages: [],

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

  // reset message array
  setCleanMessage() {
    set(() => ({ messages: [] }));
  },

  //   setBasicDetails(rest) {
  //     set((state) => ({ ...state, ...rest }));
  //   },
}));
