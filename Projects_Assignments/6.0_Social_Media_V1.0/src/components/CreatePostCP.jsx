import { useContext, useRef } from "react";
import createPostCSS from "./CreatePostCP.module.css";
import { Postlist } from "../store/Postliststore";
const CreatePostCP = () => {
  const { addPost } = useContext(Postlist);
  const userId = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const reactions = useRef();
  const tags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = userId.current.value;
    const posttitle = postTitle.current.value;
    const postcontent = postContent.current.value;
    const reactionS = reactions.current.value;
    const tag = tags.current.value.split(" ");

    userId.current.value = "";
    postTitle.current.value = "";
    postContent.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";

    addPost(userid, posttitle, postcontent, reactionS, tag);
  };
  return (
    <>
      <form className={`${createPostCSS.createPost}`} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user id
          </label>
          <input
            type="text"
            ref={userId}
            className="form-control"
            id="userId"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="titlePost" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitle}
            className="form-control"
            id="titlePost"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bodyPost" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postContent}
            className="form-control"
            id="bodyPost"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactionsPost" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactions}
            className="form-control"
            id="reactionsPost"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashTags
          </label>
          <input type="text" ref={tags} className="form-control" id="tags" />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePostCP;
