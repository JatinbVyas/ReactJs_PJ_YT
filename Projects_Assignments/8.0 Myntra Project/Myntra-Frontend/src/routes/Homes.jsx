import { useSelector } from "react-redux";
import HomeItemCP from "../components/HomeItemCP.jsx";
const Homes = () => {
  const item = useSelector((store) => store.item);
  return (
    <main>
      <div className="items-container">
        {item.map((item) => (
          <HomeItemCP key={item.id} item={item}></HomeItemCP>
        ))}
      </div>
    </main>
  );
};

export default Homes;
