import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/login";
import Dashboard from "./layouts/Dashboard";
import HomePage from "./pages/HomePage";
import NonAuth from "./layouts/NonAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <NonAuth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
