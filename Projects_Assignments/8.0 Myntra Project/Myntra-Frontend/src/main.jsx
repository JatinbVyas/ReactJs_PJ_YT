import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BagCP from "./routes/Bag.jsx";
import Homes from "./routes/Homes.jsx";
import { Provider } from "react-redux";
import myntrastore from "./store/index.js";

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
    <Provider store={myntrastore}>
      <RouterProvider router={routePaths}></RouterProvider>
    </Provider>
  </StrictMode>
);
