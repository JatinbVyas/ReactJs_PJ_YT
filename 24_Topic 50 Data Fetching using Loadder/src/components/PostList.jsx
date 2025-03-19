import PostViewCP from "./PostViewCP";
import WelcomeMSG from "./WelcomeMSG";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  /**
   * useLoaderData is hook of react and import from react-router-dom package.
   * this hook use to fetch data in variable that is in returened in loader in main.jasx while route
   * to this component.
   */
  const postList = useLoaderData();
  return (
    <>
      {postList.length == 0 && <WelcomeMSG></WelcomeMSG>}
      {postList.map((post) => (
        <PostViewCP key={post.postId} post={post}></PostViewCP>
      ))}
    </>
  );
};

export const postLoadder = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
export default PostList;
