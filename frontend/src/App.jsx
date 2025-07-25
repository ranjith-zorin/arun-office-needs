import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Catalog from "./pages/Catalog";
import Blogs from "./pages/Blogs";
import ContactUS from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ProdutDetails from "./pages/ProdutDetails";
import Login from "./pages/Login";
import Customization from "./pages/Customization";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact-us" element={<ContactUS />} />
          <Route path="about-us" about element={<AboutUs />} />
          <Route path="detail/:id" about element={<ProdutDetails />} />
          <Route path="login" about element={<Login />} />
          <Route path="customization" about element={<Customization/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
