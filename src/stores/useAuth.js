import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      userId: undefined,
      username: undefined,
      name: undefined,
      gender: undefined,

      setUseDetails: (rest) => {
        set((state) => ({
          ...state,
          ...rest,
        }));
      },

      logout: () => {
        set(() => ({
          isLoggedIn: false,
          userId: undefined,
          username: undefined,
          name: undefined,
          gender: undefined,
        }));
      },
    }),
    { name: "user" }
  )
);
