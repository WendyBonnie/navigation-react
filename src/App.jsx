import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import Login from "./components/login/login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
