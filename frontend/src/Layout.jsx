import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/Theme";

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
