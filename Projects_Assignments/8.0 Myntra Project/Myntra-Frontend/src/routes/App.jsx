import { useSelector } from "react-redux";
import FetchItems from "../components/FetchItems";
import FooterCP from "../components/FooterCP";
import HeaderCP from "../components/HeaderCP";
import { Outlet } from "react-router-dom";
import LoadderCP from "../components/LoadderCP";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <HeaderCP></HeaderCP>
      <FetchItems></FetchItems>
      {fetchStatus[0].currentlyFetching ? <LoadderCP></LoadderCP> : <Outlet />}

      <FooterCP></FooterCP>
    </>
  );
}

export default App;
