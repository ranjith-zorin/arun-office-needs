import { rgbToHex } from "@mui/material";
import { color } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "rgb(235, 126, 2)",
            color: "white",
            height: "75px",
            position: "sticky",
          }}
        >
          <Link to="/">Arun Office Needs</Link>
          <Link to="/products">Products</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="blogs">Blogs</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact US</Link>
          <Link to="/customization">Customization</Link>
          <Link to="/login">Login</Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
