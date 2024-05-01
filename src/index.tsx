import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import RandomQuoteMachine from "./pages/RandomQuoteMachine";
import MarkdownPreviewer from "./pages/MarkdownPreviewer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RandomQuoteMachine /> */}
    <MarkdownPreviewer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
