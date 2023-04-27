import React from "react";
import "../styles/navbar.css";
import { BiSearch } from "react-icons/bi";
import {BsCart2} from "react-icons/bs"
const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div className="navbar-left">
            <span className="language">En</span>
            <div className="search-container">
              <input className="navbar-input"></input>
              <BiSearch  style={{color:"gray" , fontSize:"16px"}}/>
            </div>
          </div>
          <div className="navbar-center">
            <h1 className="logo">SHOP18.</h1>
          </div>
          <div className="navbar-right">
           <div className=" menuitem register">register</div>
           <div className="menuitem">SIGN In</div>
           <button type="button" class="btn position-relative">
             <BsCart2 style={{fontSize:"20px"}}/>
              <span class=" badge  translate-middle badge  rounded-circle bg-danger" >
                9
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
           .
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
