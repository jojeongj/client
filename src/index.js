import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 리액트 쿼리
import { QueryClient, QueryClientProvider } from "react-query";
// 리액트 라우터 돔
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
