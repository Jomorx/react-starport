import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { StarportScope } from "../packages/StarPort/dist/index";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <HashRouter>
    <StarportScope>
      <App />
    </StarportScope>
  </HashRouter>
  // </React.StrictMode>
);

