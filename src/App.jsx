import "./App.css";

import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
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

function Layout() {
  return (
    <div>
      <header
        style={{
          backgroundColor: "blueviolet",
          width: "100vw",
          position: "fixed",
          top: 0,
          minHeight: "75px",
        }}
      ></header>
      <aside
        style={{
          width: 250,
          position: "fixed",
          top: 75,
          backgroundColor: "#d1ffc4",
          height: "calc(100vh - 75px)",
        }}
      ></aside>
      <div
        style={{
          marginLeft: "260px",
          marginTop: "80px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Ecom />} />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
