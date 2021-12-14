import React from "react";
import { Planet } from "react-planet";
// import AddIcon from "@mui/icons-material/Add";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AndroidIcon from "@mui/icons-material/Android";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CheckroomIcon from "@mui/icons-material/Checkroom";

function Menurond() {
  return (
    <div>
      <Planet
        centerContent={
          <div
            style={{
              height: 100,
              width: 100,
              borderRadius: "50%",
              backgroundColor: "#1da8a4",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Découvrir
          </div>
        }
        hideOrbit
        autoClose
        orbitRadius={120}
        bounceOnClose
        rotation={105}
        // the bounce direction is minimal visible
        // but on close it seems the button wobbling a bit to the bottom
        bounceDirection="BOTTOM"
      >
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <AccountBalanceIcon />
        </div>
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <AddShoppingCartIcon />
        </div>
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AgricultureIcon />
        </div>
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AndroidIcon />
        </div>
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BathtubIcon />
        </div>
        <div
          style={{
            height: 70,
            width: 70,
            borderRadius: "50%",
            backgroundColor: "#9257ad",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckroomIcon />
        </div>
      </Planet>
    </div>
  );
}

export default Menurond;
