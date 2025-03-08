import { createContext, useReducer } from "react";

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

  const addPost = (userId, postTitle, postContent, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        postId: Date.now(),
        titlePost: postTitle,
        bodyPost: postContent,
        reactionsPost: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postdeletId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: { postdeletId },
    });
  };
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);
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
