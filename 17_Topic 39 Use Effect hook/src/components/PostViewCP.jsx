import { RiDeleteBin6Line } from "react-icons/ri";
import postviewCSS from "./PostViewCP.module.css";
import { Postlist as PostData } from "../store/Postliststore";
import { useContext } from "react";
const PostViewCP = ({ post }) => {
  const { deletePost } = useContext(PostData);

  return (
    <>
      <div
        className={`${postviewCSS.postCard} card`}
        style={{ width: "30rem" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {post.titlePost}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.postId)}
            >
              <RiDeleteBin6Line />
            </span>
          </h5>
          <p className="card-text">{post.bodyPost}</p>
          {post.tags.map((tg) => (
            <span
              key={tg}
              className={`badge text-bg-primary ${postviewCSS.hashtag}`}
            >
              {tg}
            </span>
          ))}
          <div
            className={`alert alert-success ${postviewCSS.reactions}`}
            role="alert"
          >
            This post is reacted by {post.reactionsPost} person.
          </div>
        </div>
      </div>
    </>
  );
};

export default PostViewCP;
