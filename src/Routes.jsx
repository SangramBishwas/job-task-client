import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="lg:w-[1280px] mx-auto"><Root></Root></div>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/product',
            element: <Products></Products>
        }
      ]
    },
  ]);
