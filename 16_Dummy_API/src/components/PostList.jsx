import { useContext } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";
import WelcomeMSG from "./WelcomeMSG";

const PostList = () => {
  const { postList } = useContext(postData);
  return (
    <>
      {postList.length == 0 && <WelcomeMSG></WelcomeMSG>}
      {postList.map((post) => (
        <PostViewCP key={post.postId} post={post}></PostViewCP>
      ))}
    </>
  );
};

export default PostList;
