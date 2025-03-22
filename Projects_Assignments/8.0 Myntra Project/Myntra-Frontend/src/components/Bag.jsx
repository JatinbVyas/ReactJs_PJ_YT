import FooterCP from "./FooterCP";
import HeaderCP from "./HeaderCP";

const BagCP = () => {
  return (
    <>
      <HeaderCP></HeaderCP>
      <main>
        <div className="bag-page">
          <div className="bag-items-container"></div>
          <div className="bag-summary"></div>
        </div>
      </main>
      <FooterCP></FooterCP>
    </>
  );
};

export default BagCP;
