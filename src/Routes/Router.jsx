import { createBrowserRouter } from "react-router-dom";
import DetailsPage from "../Components/Pages/Home/Home/Movies/DetailsPage";
import Home from "../Components/Pages/Home/Home/Home";
import Login from "../Components/Pages/Login/Login";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: async () => {
          return fetch("https://api.tvmaze.com/search/shows?q=all");
        },
      },
      {
        path: "/show-details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: async ({params}) => {
          return fetch(`https://api.tvmaze.com/shows/${params?.id}`);
        }
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
