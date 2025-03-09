import { useContext, useState } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";
import WelcomeMSG from "./WelcomeMSG";

const PostList = () => {
  const { postList, addDefaultPost } = useContext(postData);
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDefaultPost(data.posts);
      });

    setDataFetched(true);
  }
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
