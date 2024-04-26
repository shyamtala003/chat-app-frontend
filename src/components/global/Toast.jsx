import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
  const contextClass = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-green-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Slide}
      toastClassName={(context) => {
        return `${
          contextClass[context?.type || "default"]
        } relative bg-opacity-50 flex p-1 pb-2 w-full rounded-md justify-between backdrop-blur-lg overflow-hidden cursor-pointer`;
      }}
    />
  );
}
