import React from "react";
import hero from "api/hero";
// import AddIcon from "@mui/icons-material/Add";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import AgricultureIcon from "@mui/icons-material/Agriculture";
// import AndroidIcon from "@mui/icons-material/Android";
// import BathtubIcon from "@mui/icons-material/Bathtub";
// import CheckroomIcon from "@mui/icons-material/Checkroom";
import Header from "../header";
import "./style.scss";

function Presentation() {
  const contenuHero = hero.filter((her) => her.id === 2);
  // const toggle = document.querySelector(".toggle");
  // const menu = document.querySelector(".menu");
  // toggle.onclick = function () {
  //   menu.classList.toggle("active");
  // };
  return (
    <div className="min-h-screen">
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <Header key={contenuHero.id} hero={contenuHero} />
      </div>
      {/* <div className="animation">
        <div className="portfolio">
          <div className="toggle">
            <li style={{ "--i": 0 }}>
              <a href="http//" rel="noreferrer">
                <AddIcon />
              </a>
            </li>
            <li style={{ "--i": 1 }}>
              <a href="http//" rel="noreferrer">
                <AccountBalanceIcon />
              </a>
            </li>
            <li style={{ "--i": 2 }}>
              <a href="http//" rel="noreferrer">
                <AddShoppingCartIcon />
              </a>
            </li>
            <li style={{ "--i": 3 }}>
              <a href="http//" rel="noreferrer">
                <AgricultureIcon />
              </a>
            </li>
            <li style={{ "--i": 4 }}>
              <a href="http//" rel="noreferrer">
                <AndroidIcon />
              </a>
            </li>
            <li style={{ "--i": 5 }}>
              <a href="http//" rel="noreferrer">
                <BathtubIcon />
              </a>
            </li>
            <li style={{ "--i": 6 }}>
              <a href="http//" rel="noreferrer">
                <CheckroomIcon />
              </a>
            </li>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Presentation;
