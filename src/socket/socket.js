import { io } from "socket.io-client";

const URL = import.meta.env.VITE_API_URL; // Access environment variables directly
export const socket = io(URL, {
  autoConnect: false,
  withCredentials: true,
  reconnectionAttempts: 6,
  reconnectionDelay: 5000,
});
