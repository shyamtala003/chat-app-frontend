import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast() {
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
        return `relative bg-red-600 bg-opacity-50 flex p-1 min-h-10 w-full rounded-md justify-between backdrop-blur-lg overflow-hidden cursor-pointer`;
      }}
    />
  );
}
