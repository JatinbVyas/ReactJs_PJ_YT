import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CreatePostCP from "./components/CreatePostCP.jsx";
import PostList from "./components/PostList.jsx";

/**
 * Here we learned new concept of ReactRouter. React Router used define paths for your pages with single page application.
 * For achive this first we need to import RouterProvider and createBrowserRouter from ract-router-dom package that is installed in your project using npm install react-router-dom.
 * After this we need to create route path object using createBrowserRouter in which you need to define various path of your application in array.
 * And then instaed of direct define App component in strictmode define RouterProvider component and in which give router property the path array that you created from vreateBrowserRouter.
 */

/**
 * Now we see another property children to define path.
 * Here our App component is main component and in which other component is loading.
 * So as parent we define App compoent first in array, so if anyone comes with only / App component will load.
 * Now in children we given two path if someone comes with / then PostList will load and
 * if someone comes with /create-post then our Create post component will get load.
 * For this we made changes in our App component , we removed temporarry conditional loading and define
 * one new outlet component that will help to load component Postlist and create post at that place.
 */
const routePaths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList></PostList> },
      { path: "/create-post", element: <CreatePostCP /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routePaths}></RouterProvider>
  </StrictMode>
);
