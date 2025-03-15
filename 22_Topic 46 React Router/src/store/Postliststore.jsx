import { createContext, useCallback, useReducer } from "react";

export const Postlist = createContext({
  postList: [],
  addDefaultPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostlist, action) => {
  let newPostList = currentPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostlist.filter(
      (post) => post.postId !== action.payload.postdeletId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostlist];
  } else if (action.type === "ADD_DEFAULT_POSTS") {
    //console.log(action.payload.initialsPostList);
    newPostList = action.payload.initialsPostList;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addDefaultPost = (posts) => {
    let initialsPostList = [];
    posts.forEach((element) => {
      initialsPostList.push({
        postId: element.id,
        titlePost: element.title,
        bodyPost: element.body,
        reactionsPost: element.reactions.likes,
        userId: element.userId,
        tags: element.tags,
      });
    });

    //console.log(initialsPostList);
    dispatchPostlist({
      type: "ADD_DEFAULT_POSTS",
      payload: {
        initialsPostList,
      },
    });
  };

  const addPost = (postData) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        postId: Date.now(),
        titlePost: postData.title,
        bodyPost: postData.body,
        reactionsPost: postData.reactions,
        userId: postData.userId,
        tags: postData.tags,
      },
    });
  };

  /**
   * use callback is a hook.
   * when method is written inside useCallback hook so when component is repaint at that time if
   * there is no change in method then method will not get repaint and due to this the component who recevie
   * this method as prop will not repaint.
   * this take two arguments first is function and second is dependancey array.
   */
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);

  const deletePost = useCallback(
    (postdeletId) => {
      dispatchPostlist({
        type: "DELETE_POST",
        payload: { postdeletId },
      });
    },
    [dispatchPostlist]
  );

  return (
    <Postlist.Provider
      value={{
        postList: postList,
        addDefaultPost: addDefaultPost,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider;
