import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { ContextProvider } from "./Context";
import { AuthContextProvider } from "./context/AuthContext.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthContextProvider>
);
