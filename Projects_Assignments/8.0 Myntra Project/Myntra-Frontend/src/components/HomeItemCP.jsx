import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlices";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineDeleteForever } from "react-icons/md";

const HomeItemCP = ({ item }) => {
  const dispatch = useDispatch();
  const bagObj = useSelector((store) => store.bag);
  const itemIdFound = bagObj.indexOf(item.id) >= 0;
  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemovefromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {itemIdFound ? (
          <button
            type="button"
            className="btn btn-add-bag btn-danger"
            onClick={handleRemovefromBag}
          >
            <MdOutlineDeleteForever /> Remove from Bag
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-add-bag btn-success"
            onClick={handleAddtoBag}
          >
            <IoMdAddCircleOutline /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItemCP;
