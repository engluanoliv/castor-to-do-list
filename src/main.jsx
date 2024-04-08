import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ToDosContextProvider from "./store/to-do-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDosContextProvider>
      <App />
    </ToDosContextProvider>
  </React.StrictMode>
);
