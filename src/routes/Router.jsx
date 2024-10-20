import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      {
        path: "order/:category",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);

export default router;
