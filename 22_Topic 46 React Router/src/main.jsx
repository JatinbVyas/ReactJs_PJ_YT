import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

/**
 * Here we learned new concept of ReactRouter. React Router used define paths for your pages with single page application.
 * For achive this first we need to import RouterProvider and createBrowserRouter from ract-router-dom package that is installed in your project using npm install react-router-dom.
 * After this we need to create route path object using createBrowserRouter in which you need to define various path of your application in array.
 * And then instaed of direct define App component in strictmode define RouterProvider component and in which give router property the path array that you created from vreateBrowserRouter.
 */
const routePaths = createBrowserRouter([{ path: "/", element: <App></App> }]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routePaths}></RouterProvider>
  </StrictMode>
);
