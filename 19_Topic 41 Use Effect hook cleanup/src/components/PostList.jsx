import { useContext, useEffect, useState } from "react";
import PostViewCP from "./PostViewCP";
import { Postlist as postData } from "../store/Postliststore";
import WelcomeMSG from "./WelcomeMSG";
import Loadder from "./Loadder";

const PostList = () => {
  const { postList, addDefaultPost } = useContext(postData);

  const [fetching, setFetching] = useState(false);
  /**
   * here we seet the new hook that is useEffect hook.
   * This hook take two aregument , first one is function in which you can write anything.
   * and second is dependancy list.
   * If you pass empty array in second argument means no dependancy then this will render only once at initial stage.
   * if you pass any props or state then whenever state or props change it will render the function that is written in first argument.
   */
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addDefaultPost(data.posts);
        setFetching(false);
      });
  }, []);

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
