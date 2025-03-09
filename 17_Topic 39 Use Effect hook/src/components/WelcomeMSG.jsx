const WelcomeMSG = ({ onGetPostsClick }) => {
  return (
    <center style={{ textAlign: "center", margin: "10px" }}>
      <h1>There are no posts.</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get Post from Server!
      </button>
    </center>
  );
};

export default WelcomeMSG;
