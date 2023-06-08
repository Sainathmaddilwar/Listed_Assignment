import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// 82735374619-1t6arrfgunhq6b6qjmg5nbbvvqbi3cbq.apps.googleusercontent.com
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="82735374619-1t6arrfgunhq6b6qjmg5nbbvvqbi3cbq.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId="82735374619-1t6arrfgunhq6b6qjmg5nbbvvqbi3cbq.apps.googleusercontent.com">
//       {" "}
//       <App />
//     </GoogleOAuthProvider>
//     ;
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
