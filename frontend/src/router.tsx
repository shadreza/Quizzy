import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import PageNotFound from "./views/error/PageNotFound";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Surveys";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard/>
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'signup',
        element: <Signup/>
      },
      {
        path: '*',
        element: <PageNotFound/>
      }
    ]
  },
  {
    path: '/surveys',
    element: <Surveys/>
  },
  {
    path: '*',
    element: <PageNotFound/>
  }

])

export default router
