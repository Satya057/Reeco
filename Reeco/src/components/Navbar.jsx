import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const UL = styled.ul`
  list-style-type: none;
  display: flex;
`;
const LI = styled.li`
  color: white;
  display: flex;
  jusify-content: center;
  margin-top: 10px;
  margin-left: 40px;
`;
const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div style={{ height: "40px", backgroundColor: "#3c6644" }}>
        <UL>
          <LI style={{ fontSize: "20px", marginTop: "5px" }}>Reeco</LI>
          <LI>Store</LI>
          <LI>Orders</LI>
          <LI>Analytics</LI>
          <LI style={{ marginLeft: "700px" }}>Cart {cartItems.length} Items</LI>
          <LI>Hello, James</LI>
        </UL>
      </div>
    </div>
  );
};

export default Navbar;
