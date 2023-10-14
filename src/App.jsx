import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Ecom from "./Ecom";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import ProfileComponent from "./Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ecom />} />
          <Route path="/products" element={<Ecom />} />
          <Route path="/cart" element={<Cart />} />
          {/* Path Parameters */}
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
