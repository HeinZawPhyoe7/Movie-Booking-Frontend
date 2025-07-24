"use client";

import store from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const AppRootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <div>{children}</div>
    </Provider>
  );
};

export default AppRootWrapper;
