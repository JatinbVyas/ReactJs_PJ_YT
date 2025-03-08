import { createContext, useReducer } from "react";

const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostlist, action) => {
  return currentPostlist;
};

const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = () => {};
  const [postList, dispatchPostlist] = useReducer(postListReducer, []);
  return (
    <Postlist.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider;
