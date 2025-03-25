import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const BagCP = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.item);
  const finalItems = items.filter((item) => {
    const itemInex = bagItems.indexOf(item.id);
    return itemInex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item}></BagItem>
            ))}
          </div>
          <BagSummary></BagSummary>
        </div>
      </main>
    </>
  );
};

export default BagCP;
