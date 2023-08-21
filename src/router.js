import { Outlet, createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import NotFound from "./app/NotFound";
import Splash from "./app/Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Page />,
      },
      {
        path: "splash",
        element: <Splash />,
      },
    ],
  },
]);

export default router;
