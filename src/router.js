import { Outlet, createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import NotFound from "./app/NotFound";
import Splash from "./app/Splash";
import Tour from "./app/Tour";
import Qr from "./app/Qr";
import Fav from "./app/Fav";
import Menu from "./app/Menu";

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
      {
        path: "tour",
        element: <Tour />,
      },
      {
        path: "qr",
        element: <Qr />,
      },
      {
        path: "fav",
        element: <Fav />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
    ],
  },
]);

export default router;
