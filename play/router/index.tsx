import { useRoutes } from "react-router-dom";
import None from "../pages/None";
import Info from "../pages/Info";
import List from "../pages/List";
import React from "react";
export default () =>
  useRoutes([
    {
      path: "/list",
      element: <List />,
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "none",
      element: <None />,
    },
  ]);
