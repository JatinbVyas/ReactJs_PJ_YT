const BagSummary = () => {
  const bagSummaryObj = {
    totalItem: 3,
    totalMRP: 2500,
    totalDiscount: 500,
    finalPayment: 2000,
  };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummaryObj.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummaryObj.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummaryObj.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{bagSummaryObj.finalPayment}
          </span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
