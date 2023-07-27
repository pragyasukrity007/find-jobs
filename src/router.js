import { createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import Home from "./pages/home/Home";
import JobDetails from "./components/jobDetails/JobDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Broken from "./pages/broken/Broken";


// browser router file
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("./data.json").then((res) => res.json()),
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Broken />,
      },
    ],
  },
  {
    path: "*",
    element: <Broken />,
  },
]);

export default router;
