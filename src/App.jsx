/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import MainLayout from "./components/layouts/MainLayout";
import Toast from "./components/global/Toast";
import AppRouter from "./router";
import { useAuth } from "./stores/useAuth";
import { socket } from "./socket/socket";
import { useConversation } from "./stores/useConversation";

export default function App() {
  const { isLoggedIn, userId } = useAuth();
  const { setOnlineUser } = useConversation();

  useEffect(() => {
    function onConnect() {
      console.log("socket connected");
    }

    function onDisconnect() {
      console.log("socket disconnected");
    }

    if (isLoggedIn) {
      try {
        socket.auth = { userId };
        socket.connect();
      } catch (error) {
        console.log(error);
      }
    }
    socket.on("connect", onConnect);
    socket.on("onlineUsers", (value) => setOnlineUser(value));
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [isLoggedIn, userId]); // Add isLoggedIn and userId to dependency array

  return (
    <>
      <MainLayout>
        <AppRouter />
      </MainLayout>
      <Toast />
    </>
  );
}
