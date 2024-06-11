import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import Featured from "./Components/Featured/Featured";
import NewArrivals from "./Components/NewArrivals/NewArrivals";
import Shop from "./Components/Shop/Shop";

import Cart from "./Components/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "featured",
        element: <Featured />,
      },
      {
        path: "newArrivals",
        element: <NewArrivals />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
export default router;
