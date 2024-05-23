import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
    },
  ]);
  export default router