import React from "react";
import { DefaultButton, DefaultButton1 } from "./Button";
const Header = () => {
  return (
    <div style={{ boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.1)" }}>
      <div>
        <p>Orders {">"} Order 32457ABC</p>
        <h3>Order 32457ABC</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            margin: "40px",
          }}
        >
          <DefaultButton1>Back</DefaultButton1>
          <DefaultButton>Approve Order</DefaultButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
