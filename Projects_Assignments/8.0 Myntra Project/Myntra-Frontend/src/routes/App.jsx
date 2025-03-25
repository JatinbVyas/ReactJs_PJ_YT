import FetchItems from "../components/FetchItems";
import FooterCP from "../components/FooterCP";
import HeaderCP from "../components/HeaderCP";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderCP></HeaderCP>
      <FetchItems></FetchItems>
      <Outlet />
      <FooterCP></FooterCP>
    </>
  );
}

export default App;
