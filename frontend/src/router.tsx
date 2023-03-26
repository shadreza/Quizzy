import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import PageNotFound from "./views/PageNotFound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <PageNotFound/>
  }

])

export default router
