import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Info from "../pages/Info";
import List from "../pages/List";
export default () =>
  useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/info",
      element: <Info />,
    },
    {
      path: "list",
      element: <List />,
    },
  ]);
