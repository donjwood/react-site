import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import AboutPage, { loader as aboutLoader } from "./pages/About";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage />, loader: aboutLoader },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
