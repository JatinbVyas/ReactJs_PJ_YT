import FooterCP from "../components/FooterCP";
import HeaderCP from "../components/HeaderCP";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderCP></HeaderCP>
      <Outlet />
      <FooterCP></FooterCP>
    </>
  );
}

export default App;
