import { useContext } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";
import WelcomeMSG from "./WelcomeMSG";
import Loadder from "./Loadder";

const PostList = () => {
  const { postList, fetching } = useContext(postData);

  return (
    <>
      {fetching == true && <Loadder></Loadder>}
      {!fetching && postList.length == 0 && <WelcomeMSG></WelcomeMSG>}
      {!fetching &&
        postList.map((post) => (
          <PostViewCP key={post.postId} post={post}></PostViewCP>
        ))}
    </>
  );
};

export default PostList;
