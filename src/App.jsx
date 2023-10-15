import "./App.css";

import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Ecom from "./Ecom";
import Cart from "./Cart";
import ProductPage from "./ProductPage";
import ProfileComponent from "./Profile";

const PageNotFound = ({ autoRedirect }) => {
  if (autoRedirect) {
    // Sort of redirect to a particular page
    return <Navigate to={"/"} replace />;
  }

  return (
    <>
      <h1>No Page Found</h1>
      {/* Link to Home Page */}
      <Link to="/">Go to Home</Link>
    </>
  );
};

PageNotFound.propTypes = {
  autoRedirect: PropTypes.bool.isRequired,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ecom />} />
          <Route path="/products">
            <Route index element={<Ecom />} />
            {/* Url for belopw route /products/<product-id> */}
            <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          {/* Path Parameters */}
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="*" element={<PageNotFound autoRedirect={false} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
