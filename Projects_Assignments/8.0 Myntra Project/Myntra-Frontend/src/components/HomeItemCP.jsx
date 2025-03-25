import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlices";

const HomeItemCP = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddtoBag = () => {
    dispatch(bagActions.addToBag(item.id));
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
        <button className="btn-add-bag" onClick={handleAddtoBag}>
          Add to Bag
        </button>
      </div>
    </>
  );
};

export default HomeItemCP;
