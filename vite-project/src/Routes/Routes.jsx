import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import MainLayouts from "../Components/Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import ErrorApp from "../Pages/ErrorApp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement:<ErrorPage/>,
    children:[
     {
      index: true,
      element: <Home />,
    },
    {
      path: "home",     
      element: <Home />,
    },
    {
    path: "apps",
    element: <Apps />,
  },
  {
    path: "installation",
    element: <Installation />,
  },

    ]
  },
  // {
  //   path:'*',
  //   element:<ErrorPage/>,
  // }

  
]);
// console.log (router);
export default router