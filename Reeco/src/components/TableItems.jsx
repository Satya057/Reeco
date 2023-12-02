import React, { useState, useSyncExternalStore } from "react";
import styled from "styled-components";
import apple from "../components/Images/Apple Green Smith.png";
import avacado from "../components/Images/Avocado Hass.jpg";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Input = styled.input`
  width: 40%;
  height: 30px;
  border: 1px solid black;
  border-radius: 6px;
`;
const SearchButton = styled.button`
  height: 30px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: white;
`;
const ButtonAddItem = styled.button`
  height: 30px;
  margin-left: 400px;
  background-color: white;
  color: #3c6644;
  border: 2px solid #3c6644;
  border-radius: 6px;
`;
const PrinterIconButton = styled.button`
  height: 30px;
  background-color: white;
  color: #3c6644;
  border: 2px solid #3c6644;
  border-radius: 6px;
`;

const TD = styled.td`
  text-align: center;
`;
const TH = styled.th`
  // border: 2px solid #3c6644
`;
const TableItems = () => {
  const [searchInput, setSearchInput] = useState("");
  const [avacadoStatusText, setAvacadoStatusText] = useState("");
  const [avacadoPrice, setAvacadoPrice] = useState((63 / 6) * 1);
  const [avacadoQuantity, setAvacadoQuantity] = useState(3);
  const [avacadoTotal, setAvacadoTotal] = useState(
    avacadoQuantity * avacadoPrice
  );
  const [appleStatusText, setAppleStatusText] = useState("");
  const [applePrice, setApplePrice] = useState((108 / 8) * 1);
  const [appleQuantity, setAppleQuantity] = useState(5);
  const [appleTotal, setAppleTotal] = useState(appleQuantity * applePrice);

  const [isAvacadoCrossPopOpen, SetisAvacadoCrossPopOpen] = useState(false);
  const [isAppleCrossPopOpen, SetIsAppleCrossPopOpen] = useState(false);

  const [isAvacadoColored, setIsAvacadoColored] = useState(false);
  const [isAppleColored, setIsAppleColored] = useState(false);

  const [isAvacadoEditPopOpen, setIsAvacadoEditPopOpen] = useState(false);
  const [isAppleEditPopOpen, setIsAppleEditPopOpen] = useState(false);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleAvacadoRightClick = () => {
    setAvacadoStatusText("Approved");
    setIsAvacadoColored(true);
  };
  const handleAvacadoCrossClick = () => {
    SetisAvacadoCrossPopOpen(!isAvacadoCrossPopOpen);
  };
  const handleAvacadoMissingUrgent = () => {
    setAvacadoStatusText("Missing Urgent");
    SetisAvacadoCrossPopOpen(!isAvacadoCrossPopOpen);
    setIsAvacadoColored(false);
  };
  const handleAvacadoMissing = () => {
    setAvacadoStatusText("Missing");
    SetisAvacadoCrossPopOpen(!isAvacadoCrossPopOpen);
    setIsAvacadoColored(false);
  };

  const handleAppleRightClick = () => {
    setAppleStatusText("Approved");
    setIsAppleColored(true);
  };
  const handleAppleCrossClick = () => {
    SetIsAppleCrossPopOpen(!isAppleCrossPopOpen);
  };
  const handleAppleMissingUrgent = () => {
    setAppleStatusText("Missing Urgent");
    SetIsAppleCrossPopOpen(!isAppleCrossPopOpen);
    setIsAppleColored(false);
  };
  const handleAppleMissing = () => {
    setAppleStatusText("Missing");
    SetIsAppleCrossPopOpen(!isAvacadoCrossPopOpen);
    setIsAppleColored(false);
  };

  const handleAvacadoEdit = () => {
    setIsAvacadoEditPopOpen(true);
  };
  const handleAvacadoEditClose = () => {
    setIsAvacadoEditPopOpen(false);
  };
  const handleAvacadoPriceAdd = () => {
    setAvacadoPrice((previous) => previous + 1);
  };
  const handleAvacadoPriceMinus = () => {
    if (avacadoPrice <= 0) {
      setAvacadoPrice(0);
    } else {
      setAvacadoPrice((previous) => previous - 1);
    }
  };
  const handleAvacadoQuantityAdd = () => {
    setAvacadoQuantity(avacadoQuantity + 1);
  };
  const handleAvacadoQuantityMinus = () => {
    if (avacadoQuantity <= 0) {
      setAvacadoQuantity(0);
    } else {
      setAvacadoQuantity(avacadoQuantity - 1);
    }
  };

  const handleAvacadoUpdatePriceAndQuantity = () => {
    setAvacadoTotal(avacadoPrice * avacadoQuantity);
    setIsAvacadoEditPopOpen(false);
    setIsAvacadoColored(true);
    setAvacadoStatusText("Price or quantity Updated");
  };

  const handleAppleEdit = () => {
    setIsAppleEditPopOpen(true);
  };
  const handleAppleEditClose = () => {
    setIsAppleEditPopOpen(false);
  };
  const handleApplePriceAdd = () => {
    // setNumber((previous) => previous + 1)
    setApplePrice((previous) => previous + 1);
    setAppleTotal(applePrice * appleQuantity);
  };
  const handleApplePriceMinus = () => {
    if (applePrice <= 0) {
      setApplePrice(0);
    } else {
      setApplePrice((previous) => previous - 1);
    }
  };
  const handleAppleQuantityAdd = () => {
    setAppleQuantity(appleQuantity + 1);
  };
  const handleAppleQuantityMinus = () => {
    if (appleQuantity <= 0) {
      setAppleQuantity(0);
    } else {
      setAppleQuantity(appleQuantity - 1);
    }
  };

  const handleAppleUpdatePriceAndQuantity = () => {
    setAppleTotal(applePrice * appleQuantity);
    setIsAppleEditPopOpen(false);
    setIsAppleColored(true);
    setAppleStatusText("Price or quantity Updated");
  };
  // const filteredItems = items.filter((item) => {
  //   return item.name.includes(searchInput);
  // });
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  };
  return (
    <div>
      <div>
        <Input type="search" value="Search.." onChange={handleChange} />
        <SearchButton>SearchIcon</SearchButton>
        {/* <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <ButtonAddItem onClick={() => handleAddItems()}>Add Item</ButtonAddItem>
        <PrinterIconButton>Printer Icon</PrinterIconButton>
      </div>
      <div
        style={{
          width: "100%",
          marginTop: "20px",
          //   height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <table
          style={{
            border: "2px solid forestgreen",
            width: "100%",
            // height: "10vh",
          }}
        >
          <tr>
            <TH>Product Name</TH>
            <TH>Brand</TH>
            <TH>Price</TH>
            <TH>Quantity</TH>
            <TH>Total</TH>
            <TH>Status</TH>
          </tr>
          <tr>
            <TD>
              <img height={60} width={60} src={avacado} alt="horse" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </TD>
            <TD>Hormal black</TD>
            <TD>${avacadoPrice}LB</TD>
            <TD>{avacadoQuantity}</TD>
            <TD>${avacadoTotal}</TD>
            <TD>
              <span style={{ color: isAvacadoColored ? "green" : "red" }}>
                {avacadoStatusText}
              </span>{" "}
              <button onClick={handleAvacadoRightClick}>right</button>{" "}
              <button onClick={handleAvacadoCrossClick}>cross</button>
              {isAvacadoCrossPopOpen && (
                <div
                  style={{
                    width: "200px",
                    height: "150px",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #e0e0e0",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <h4 style={{ textAlign: "left" }}>Missing Product</h4>
                  <p>is "lorem ipsum" is .. urgent? </p>
                  <button onClick={handleAvacadoMissing}>No</button>
                  <button onClick={handleAvacadoMissingUrgent}>yes</button>
                </div>
              )}
              <button onClick={handleAvacadoEdit}>Edit</button>
              {isAvacadoEditPopOpen && (
                <div
                  style={{
                    width: "400px",
                    height: "375px",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #e0e0e0",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <h4 style={{ textAlign: "left" }}>Hormal Black</h4>{" "}
                    <button
                      onClick={handleAvacadoEditClose}
                      style={{ width: "50px", height: "50px" }}
                    >
                      X
                    </button>
                  </div>
                  <p style={{ textAlign: "left" }}>American Roland</p>
                  <div>
                    <img height={50} width={50} src={avacado} alt="" />
                    <p>Price: ${avacadoPrice}</p>{" "}
                    <button onClick={handleAvacadoPriceAdd}>+</button>{" "}
                    <button onClick={handleAvacadoPriceMinus}>-</button>
                    <p>Quantity: {avacadoQuantity}</p>{" "}
                    <button onClick={handleAvacadoQuantityAdd}>+</button>
                    <button onClick={handleAvacadoQuantityMinus}>-</button>
                    <p>Total: ${avacadoTotal}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <button onClick={handleAvacadoEditClose}>Cancel</button>{" "}
                    <button onClick={handleAvacadoUpdatePriceAndQuantity}>
                      Send
                    </button>
                  </div>
                </div>
              )}
            </TD>
          </tr>
          <tr>
            <TD>
              <img height={60} width={60} src={apple} alt="horse" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </span>
            </TD>
            <TD>Hormal black</TD>
            <TD>${applePrice}LB</TD>
            <TD>{appleQuantity}</TD>
            <TD>${appleTotal}</TD>
            <TD>
              <span style={{ color: isAppleColored ? "green" : "red" }}>
                {appleStatusText}
              </span>
              <button onClick={handleAppleRightClick}>right</button>{" "}
              <button onClick={handleAppleCrossClick}>cross</button>
              {isAppleCrossPopOpen && (
                <div
                  style={{
                    width: "200px",
                    height: "150px",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #e0e0e0",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <h4 style={{ textAlign: "left" }}>Missing Product</h4>
                  <p>is "lorem ipsum" is .. urgent? </p>
                  <button onClick={handleAppleMissing}>No</button>
                  <button onClick={handleAppleMissingUrgent}>yes</button>
                </div>
              )}
              <button onClick={handleAppleEdit}>Edit</button>
              {isAppleEditPopOpen && (
                <div
                  style={{
                    width: "400px",
                    height: "375px",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #e0e0e0",
                    padding: "10px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <h4 style={{ textAlign: "left" }}>Hormal Black</h4>{" "}
                    <button
                      onClick={handleAppleEditClose}
                      style={{ width: "50px", height: "50px" }}
                    >
                      X
                    </button>
                  </div>
                  <p style={{ textAlign: "left" }}>Austrailian Roland</p>
                  <div>
                    <img height={50} width={50} src={apple} alt="" />
                    <p>Price: ${applePrice}</p>{" "}
                    <button onClick={handleApplePriceAdd}>+</button>{" "}
                    <button onClick={handleApplePriceMinus}>-</button>
                    <p>Quantity: {appleQuantity}</p>{" "}
                    <button onClick={handleAppleQuantityAdd}>+</button>
                    <button onClick={handleAppleQuantityMinus}>-</button>
                    <p>Total: ${appleTotal}</p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <button onClick={handleAppleEditClose}>Cancel</button>{" "}
                    <button onClick={handleAppleUpdatePriceAndQuantity}>
                      Send
                    </button>
                  </div>
                </div>
              )}
            </TD>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TableItems;
