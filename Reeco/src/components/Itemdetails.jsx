import React from "react";
import { dataForItemsDetails } from "./constants";
const Itemdetails = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ margin: "10px" }}>
          <h5>Supplier</h5>
          <h3>{dataForItemsDetails.supplier}</h3>
        </div>
        <div style={{ margin: "10px" }}>
          <h5>Shipping Date</h5>
          <h3>{dataForItemsDetails.shippingDate}</h3>
        </div>
        <div style={{ margin: "10px" }}>
          <h5>Total</h5>
          <h3>{dataForItemsDetails.total}</h3>
        </div>
        <div style={{ margin: "10px" }}>
          <h5>Category</h5>
          <h3>{dataForItemsDetails.category}</h3>
        </div>
        <div style={{ margin: "10px" }}>
          <h5>Department</h5>
          <h3>{dataForItemsDetails.department}</h3>
        </div>
        <div style={{ margin: "10px" }}>
          <h5>Status</h5>
          <h3>{dataForItemsDetails.status}</h3>
        </div>
      </div>
    </div>
  );
};

export default Itemdetails;
