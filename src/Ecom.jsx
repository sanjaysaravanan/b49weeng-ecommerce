import PropTypes from 'prop-types';

import productsData from './data.json';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product">
      <Link
        to={`/${product.id}`}
      >
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
      </Link>
      <p>${product.price.toFixed(2)}</p>
      <div className="rating">Rating: {product.rating}</div>
      <button>Add To Cart</button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    id: PropTypes.number,
  })
}

function ProductListing() {
  const { products } = productsData;
  return (
    <div className="product-listing">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

const Ecom = () => {
    return (
      <div className="App">
      <h1>Product Listing Page</h1>
      <div
        style={{
          float: 'right'
        }}
      >
        <Link
          to={'/cart'}
        >
          Cart ( 0 )
        </Link>
      </div>
      <ProductListing />
    </div>
    )
}

export default Ecom;