import { Link } from "react-router-dom";
const EmptyBagMessage = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="./images/EmptyBag.jpg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis">
          Your Bag is Empty!
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Currently there is no item in your bag. Please add some item from
            items list.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/"
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyBagMessage;
