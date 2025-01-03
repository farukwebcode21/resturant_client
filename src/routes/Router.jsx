import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "menu", element: <Menu /> },
      {
        path: "order/:category",
        element: <Order />,
      },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "cart", element: <Cart /> },
      // admin routes
      { path: "allusers", element: <AllUsers /> },
    ],
  },
]);

export default router;
