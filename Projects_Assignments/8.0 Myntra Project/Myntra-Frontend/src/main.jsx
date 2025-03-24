import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BagCP from "./routes/Bag.jsx";
import Homes from "./routes/Homes.jsx";

const routePaths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homes /> },
      {
        path: "/bag",
        element: <BagCP></BagCP>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routePaths}></RouterProvider>
  </StrictMode>
);
