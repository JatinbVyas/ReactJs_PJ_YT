import "./App.css";
import ContainerCP from "./components/ContainerCP";
import Controlls from "./components/Controlls";
import DisplayCounter from "./components/DisplayCounter";
import HeaderCP from "./components/HeaderCP";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <ContainerCP>
          <HeaderCP></HeaderCP>
          <div className="col-lg-6 mx-auto">
            <DisplayCounter></DisplayCounter>
            <Controlls></Controlls>
          </div>
        </ContainerCP>
      </div>
    </>
  );
}

export default App;
