import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RecoilRoot } from "recoil";
import AuthorQuotes from "./pages/AuthorQuotes/AuthorQuotes.tsx";
import SingleQuote from "./pages/SingleQuote/SingleQuote.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:authorName",
        element: <AuthorQuotes />,
      },
      {
        path: "/",
        element: <SingleQuote />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
