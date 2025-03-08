import { useContext } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";

const PostList = () => {
  const { postList } = useContext(postData);
  return (
    <>
      {postList.map((post) => (
        <PostViewCP key={post.postId} post={post}></PostViewCP>
      ))}
    </>
  );
};

export default PostList;
