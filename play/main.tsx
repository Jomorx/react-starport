import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { StarportScope } from "react-starport-comp";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <StarportScope>
      <App />
    </StarportScope>
  </HashRouter>
);

