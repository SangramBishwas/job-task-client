import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Register";
import Products from "./Pages/Products";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="lg:w-[1280px] mx-auto"><Root></Root></div>,
      children: [
        {
            path: '/register',
            element: <Home></Home>
        },
        {
            path: '/',
            element: <Products></Products>
        }
      ]
    },
  ]);
