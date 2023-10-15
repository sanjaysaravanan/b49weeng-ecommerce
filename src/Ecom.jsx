import PropTypes from "prop-types";

import productsData from "./data.json";
import { Link, useSearchParams } from "react-router-dom";
import { useContext, useState } from "react";
import CartContext from "./CartContext";

function Product({ product }) {
  const { cart, addProduct } = useContext(CartContext);

  const checkCart = () => {
    return cart.find((cartProd) => product.id === cartProd.id);
  };

  const getQty = () =>
    cart.filter((cartProd) => product.id === cartProd.id).length;

  return (
    <div className="product">
      <Link to={`/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <div className="rating">Rating: {product.rating}</div>
      {!checkCart() && (
        <button onClick={() => addProduct(product)}>Add To Cart</button>
      )}
      <h3>Qty:({getQty()})</h3>
      {checkCart() && <button onClick={() => addProduct(product)}>+</button>}
    </div>
  );
}

Product.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  product: PropTypes.shape({
    // prop type for JS Object
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    id: PropTypes.number,
  }),
};

function ProductListing() {
  const { products } = productsData;

  let [searchParams, setSearchParams] = useSearchParams();

  const urlCat = searchParams.get("category");

  console.log(urlCat);

  return (
    <div className="product-listing">
      {(urlCat === "All" || urlCat === null) &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      {(urlCat !== "All" || urlCat !== null) &&
        products
          .filter(({ category }) => urlCat === category)
          .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}

const categories = [
  "All",
  "fragrances",
  "laptops",
  "smartphones",
  "home-decoration",
];

const Category = ({ title, active }) => {
  return (
    <Link
      to={`/products?category=${title}`}
      style={{ color: active ? "#fff" : "#000", textDecoration: "none" }}
      reloadDocument
    >
      <span
        style={{
          border: "1px solid",
          borderRadius: "10px",
          width: 150,
          textAlign: "center",
          padding: "10px",
          margin: "10px",
          backgroundColor: active ? "blue" : "transperant",
        }}
      >
        {title}
      </span>
    </Link>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

const Ecom = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { cart } = useContext(CartContext);

  return (
    <div className="App">
      {console.log(searchParams.get("category"))}
      <h1>Product Listing Page</h1>
      <div
        style={{
          float: "right",
        }}
      >
        <Link to={"/cart"}>Cart ( {cart.length} )</Link>
      </div>
      <div
        style={{
          display: "flex",
        }}
      >
        {categories.map((title) => (
          <Category
            title={title}
            active={title === searchParams.get("category")}
            key={title}
          />
        ))}
      </div>
      <ProductListing />
    </div>
  );
};

const RootEcom = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (productDetails) => {
    setCart([...cart, productDetails]);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct }}>
      <Ecom />
    </CartContext.Provider>
  );
};

export default RootEcom;
