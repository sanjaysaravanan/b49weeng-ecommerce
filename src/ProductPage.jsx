

import { useParams } from 'react-router-dom';
import productsData from './data.json';

const ProductPage = () => {

  const { productId } = useParams();

  const { products } = productsData;

  const product = products.find(({id}) => Number(productId) === id);

  return (
    <div className="product-detail">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Rating:</strong> {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductPage;