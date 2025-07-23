import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Catalog from "./pages/Catalog";
import Blogs from "./pages/Blogs";
import ContactUS from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
