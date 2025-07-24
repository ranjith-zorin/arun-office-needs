import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
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
      </Toolbar>
    </AppBar>
  );
}

export default Header;
