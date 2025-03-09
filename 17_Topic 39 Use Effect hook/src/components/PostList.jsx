import { useContext } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";
import WelcomeMSG from "./WelcomeMSG";

const PostList = () => {
  const { postList, addDefaultPost } = useContext(postData);

  const handlPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDefaultPost(data.posts);
      });
  };
  return (
    <>
      {postList.length == 0 && (
        <WelcomeMSG onGetPostsClick={handlPostClick}></WelcomeMSG>
      )}
      {postList.map((post) => (
        <PostViewCP key={post.postId} post={post}></PostViewCP>
      ))}
    </>
  );
};

export default PostList;
