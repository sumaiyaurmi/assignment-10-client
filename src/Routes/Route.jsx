import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Pages/Root";
import Home from "../Components/Pages/Home";
import Error from "../Components/Pages/Error";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import AllSpot from "../Components/Pages/AllSpot";
import AddSpots from "../Components/Pages/AddSpots";
import Mylist from "../Components/Pages/Mylist";
import Update from "../Components/Pages/Update";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import AllSpotDetails from "../Components/Pages/AllSpotDetails";


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
          path:"/allspots-details/:id",
          element:<AllSpotDetails></AllSpotDetails>,
          loader:({params})=> fetch(`http://localhost:5000/allSpots/${params.id}`)
        },
        {
          path:"/add-spot",
          element:<PrivateRoute><AddSpots></AddSpots></PrivateRoute>
        },
        {
          path:"/my-list",
          element:<PrivateRoute><Mylist></Mylist></PrivateRoute>
        },
        // {
        //   path: "/spots-update/:id",
        //   element:  <PrivateRoute> <Update></Update></PrivateRoute>,
        //   loader: ({ params }) =>fetch(`http://localhost:5000/allSpots/${params.id}`),
        // },
        
      ])
    },
  ]);
  export default router