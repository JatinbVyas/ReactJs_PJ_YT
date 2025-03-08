import { createContext, useReducer } from "react";

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostlist, action) => {
  let newPostList = currentPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostlist.filter(
      (post) => post.postId !== action.payload.postdeletId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = (postdeletId) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: { postdeletId },
    });
  };
  const [postList, dispatchPostlist] = useReducer(
    postListReducer,
    DEFAULT_POST
  );
  return (
    <Postlist.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </Postlist.Provider>
  );
};

const DEFAULT_POST = [
  {
    postId: "1",
    titlePost: "Going to Mumbai",
    bodyPost: "Hi Friends, I'm going to mumbai, for my vacations.",
    reactionsPost: "0",
    userId: "user-9",
    tags: ["vacation", "mumbai"],
  },
  {
    postId: "2",
    titlePost: "Creacked the exam",
    bodyPost: "Finally creacked the exam",
    reactionsPost: "15",
    userId: "user-12",
    tags: ["Graduate", "unbelivable"],
  },
];
export default PostListProvider;
