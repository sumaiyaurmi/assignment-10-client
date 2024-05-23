import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";
import Error from "../Components/Pages/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:([
        {
          path:"/",
          element:<Home></Home>
        }
      ])
    },
  ]);
  export default router