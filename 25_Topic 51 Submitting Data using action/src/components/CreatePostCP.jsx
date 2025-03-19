import { Form, redirect } from "react-router-dom";
import createPostCSS from "./CreatePostCP.module.css";

const CreatePostCP = () => {
  //const { addPost } = useContext(Postlist);

  const handleSubmit = (event) => {};
  return (
    <>
      <Form method="POST" className={`${createPostCSS.createPost}`}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user id
          </label>
          <input
            type="text"
            name="userId"
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
            name="title"
            className="form-control"
            id="titlePost"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bodyPost" className="form-label">
            Post Content
          </label>
          <textarea
            name="body"
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
            name="reactions"
            className="form-control"
            id="reactionsPost"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashTags
          </label>
          <input type="text" name="tags" className="form-control" id="tags" />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

/**
 * we removed everything from CreaePostCP component and define below methos for submit data.
 * So when Form data is submitted it can sent a request to server for submite data.
 * @returns
 */

export async function createPostAction(data) {
  const formsData = await data.request.formData();
  const postData = Object.fromEntries(formsData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      userId: postData.userId,
      reactions: postData.reactions,
      tags: postData.tags,
    }),
  })
    .then((res) => res.json())
    .then((resObj) => {
      //addPost(resObj);
      console.log(resObj);
    });

  return redirect("/");
}
export default CreatePostCP;
