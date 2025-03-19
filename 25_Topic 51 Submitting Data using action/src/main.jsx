import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CreatePostCP, { createPostAction } from "./components/CreatePostCP.jsx";
import PostList, { postLoadder } from "./components/PostList.jsx";

/**
 * Here we learning new concept of define action in path
 * here actions we define it means once data can be submitted usnig form submit button.
 * here we define createPostAction method in which data is submitted using action attribute in path.
 */
const routePaths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList></PostList>, loader: postLoadder },
      {
        path: "/create-post",
        element: <CreatePostCP />,
        action: createPostAction,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routePaths}></RouterProvider>
  </StrictMode>
);
