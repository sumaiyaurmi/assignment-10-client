import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";
import Error from "../Components/Pages/Error";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import AllSpot from "../Components/Pages/AllSpot";
import AddSpots from "../Components/Pages/AddSpots";
import Mylist from "../Components/Pages/Mylist";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:([
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/sign-up",
          element:<SignUp></SignUp>
        },
        {
          path:"/all-spot",
          element:<AllSpot></AllSpot>
        },
        {
          path:"/add-spot",
          element:<AddSpots></AddSpots>
        },
        {
          path:"/my-list",
          element:<Mylist></Mylist>
        },
        
      ])
    },
  ]);
  export default router