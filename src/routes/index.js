import LayoutDefault from "../layouts/layoutDefault";
import Cart from "../pages/cart";
import Home from "../pages/home";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ]
  }
]