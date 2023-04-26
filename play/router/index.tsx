import { useRoutes } from "react-router-dom";
import None from "../pages/None";
import Info from "../pages/Info";
import List from "../pages/List";
import React from "react";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
export default () =>
  useRoutes([
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/list",
      element: <List />,
    },
    {
      path: "/home/:id",
      element: <Home />,
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
