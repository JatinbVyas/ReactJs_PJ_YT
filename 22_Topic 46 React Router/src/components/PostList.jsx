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
    /**
     * this is abort controller , we passing signal as one extra parameter with API call
     * so when in case user shift the component then if Api call is pending then it will
     * cancel the API call using controller.Abort() method.
     */
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addDefaultPost(data.posts);
        setFetching(false);
      });

    /**
     * Whenever this particular component is killed at that time this return function will get execute.
     * This can be use to stop timer or cancel api call when component is killed.
     */
    return () => {
      console.log("Cleaning up use effect");
      controller.abort();
    };
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
