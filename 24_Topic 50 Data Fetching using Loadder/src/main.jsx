import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import CreatePostCP from "./components/CreatePostCP.jsx";
import PostList, { postLoadder } from "./components/PostList.jsx";

/**
 * Here we learning new concept of fetch data using loadder.
 * in loader we need to define one function that must return data.
 * So we define postLoadder fucntion that is written in postlist.jsx that fetching data from dummy json
 * once data received from that function react router route you to the component that is mentioned over there.
 * in this case is PostList.
 */
const routePaths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList></PostList>, loader: postLoadder },
      { path: "/create-post", element: <CreatePostCP /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routePaths}></RouterProvider>
  </StrictMode>
);
