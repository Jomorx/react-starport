import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StarportScope from "starport/components/StarportScope";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <StarportScope>
        <App />
    </StarportScope>
  </BrowserRouter>
  // </React.StrictMode>
);

