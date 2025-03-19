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

  let initialsPostList = [];
  postList.forEach((element) => {
    initialsPostList.push({
      postId: element.id,
      titlePost: element.title,
      bodyPost: element.body,
      reactionsPost: element.reactions.likes,
      userId: element.userId,
      tags: element.tags,
    });
  });

  return (
    <>
      {initialsPostList.length == 0 && <WelcomeMSG></WelcomeMSG>}
      {initialsPostList.map((post) => (
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
