import React from "react";
import ReactDOM from "react-dom/client";
import Board from "./Board";
import Counter from "./Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Board />
    <Counter />
  </React.StrictMode>
);
