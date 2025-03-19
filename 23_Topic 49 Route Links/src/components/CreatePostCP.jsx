import { useContext, useRef } from "react";
import createPostCSS from "./CreatePostCP.module.css";
import { Postlist } from "../store/Postliststore";
import { useNavigate } from "react-router-dom";
const CreatePostCP = () => {
  const { addPost } = useContext(Postlist);
  const userId = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const reactions = useRef();
  const tags = useRef();

  /**
   * Using this useNavigate hook we can move from on component to another one once certain action is completed.
   * Here when user click on Post button and addPost is completed we move to home page using
   * navigate("/")
   */
  const navigate = useNavigate();

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

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: posttitle,
        body: postcontent,
        userId: userid,
        reactions: reactionS,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addPost(resObj);
        navigate("/");
      });
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
